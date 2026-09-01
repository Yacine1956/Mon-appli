<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PhotoInvitationResource;
use App\Models\Invitation;
use App\Models\PhotoInvitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class PhotoInvitationController extends Controller
{
    public function store(Request $request, Invitation $invitation)
    {
        $request->validate([
            'photo' => ['required', 'image', 'max:5120'],
        ]);

        $chemin = $request->file('photo')->store('invitations/photos', 'public');

        $photo = $invitation->photos()->create([
            'chemin' => $chemin,
            'ordre' => $invitation->photos()->count(),
        ]);

        return new PhotoInvitationResource($photo);
    }

    public function destroy(Invitation $invitation, PhotoInvitation $photo)
    {
        Storage::disk('public')->delete($photo->chemin);
        $photo->delete();

        return response()->noContent();
    }
}
