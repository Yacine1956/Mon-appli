<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCommandeRequest;
use App\Http\Requests\UpdateCommandeRequest;
use App\Http\Resources\CommandeResource;
use App\Models\Commande;
use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function index(Request $request)
    {
        $commandes = Commande::with(['client', 'invitation'])
            ->when($request->statut, fn ($q) => $q->where('statut', $request->statut))
            ->latest()
            ->paginate(15);

        return CommandeResource::collection($commandes);
    }

    public function store(StoreCommandeRequest $request)
    {
        $commande = Commande::create($request->validated());

        return new CommandeResource($commande->load('client'));
    }

    public function show(Commande $commande)
    {
        return new CommandeResource($commande->load(['client', 'invitation', 'paiements']));
    }

    public function update(UpdateCommandeRequest $request, Commande $commande)
    {
        $commande->update($request->validated());

        return new CommandeResource($commande->load('client'));
    }

    public function destroy(Commande $commande)
    {
        $commande->delete();

        return response()->noContent();
    }
}
