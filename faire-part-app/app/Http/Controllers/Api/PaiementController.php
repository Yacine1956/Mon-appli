<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePaiementRequest;
use App\Http\Resources\PaiementResource;
use App\Models\Commande;
use App\Models\Paiement;

class PaiementController extends Controller
{
    public function store(StorePaiementRequest $request, Commande $commande)
    {
        $paiement = $commande->paiements()->create([
            ...$request->validated(),
            'statut' => 'enregistre',
        ]);

        return new PaiementResource($paiement);
    }

    public function destroy(Commande $commande, Paiement $paiement)
    {
        $paiement->delete();

        return response()->noContent();
    }
}
