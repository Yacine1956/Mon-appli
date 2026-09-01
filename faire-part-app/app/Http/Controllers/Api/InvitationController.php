<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInvitationRequest;
use App\Http\Requests\UpdateInvitationRequest;
use App\Http\Resources\InvitationResource;
use App\Models\Commande;
use App\Models\Invitation;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class InvitationController extends Controller
{
    public function store(StoreInvitationRequest $request, Commande $commande)
    {
        if ($commande->invitation) {
            return response()->json(['message' => 'Cette commande a déjà une invitation.'], 422);
        }

        $slug = $this->genererSlugUnique($request->noms_maries);

        $invitation = $commande->invitation()->create([
            ...$request->validated(),
            'slug' => $slug,
            'statut' => 'brouillon',
        ]);

        return new InvitationResource($invitation);
    }

    public function show(Invitation $invitation)
    {
        return new InvitationResource($invitation->load('photos'));
    }

    public function update(UpdateInvitationRequest $request, Invitation $invitation)
    {
        $invitation->update($request->validated());

        return new InvitationResource($invitation);
    }

    public function destroy(Invitation $invitation)
    {
        $invitation->delete();

        return response()->noContent();
    }

    public function uploadMusique(Request $request, Invitation $invitation)
    {
        $request->validate([
            'musique' => ['required', 'file', 'mimes:mp3,wav,ogg,m4a,aac', 'max:10240'],
        ]);

        if ($invitation->musique_path) {
            Storage::disk('public')->delete($invitation->musique_path);
        }

        $chemin = $request->file('musique')->store('invitations/musique', 'public');
        $invitation->update(['musique_path' => $chemin]);

        return new InvitationResource($invitation->load('photos'));
    }

    public function supprimerMusique(Invitation $invitation)
{
        if ($invitation->musique_path) {
            Storage::disk('public')->delete($invitation->musique_path);
            $invitation->update(['musique_path' => null]);
        }

        return new InvitationResource($invitation->load('photos'));
    }

    private function genererSlugUnique(string $nomsMaries): string
    {
        $base = Str::slug($nomsMaries);
        $slug = $base;
        $compteur = 1;

        while (Invitation::where('slug', $slug)->exists()) {
            $slug = "{$base}-{$compteur}";
            $compteur++;
        }

        return $slug;
    }
}
