<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Commande;
use App\Models\Invitation;
use App\Models\Paiement;
use App\Models\Rsvp;

class DashboardController extends Controller
{
    public function index()
    {
        return response()->json([
            'clients_total' => Client::count(),
            'commandes_total' => Commande::count(),
            'commandes_en_attente' => Commande::whereIn('statut', ['en_attente', 'en_preparation', 'en_revision'])->count(),
            'invitations_publiees' => Invitation::where('statut', 'publiee')->count(),
            'revenus_total' => Paiement::where('statut', 'enregistre')->sum('montant'),
            'rsvps_total' => Rsvp::count(),
        ]);
    }
}
