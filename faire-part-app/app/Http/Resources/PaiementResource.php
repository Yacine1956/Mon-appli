<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaiementResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'montant' => $this->montant,
            'moyen_paiement' => $this->moyen_paiement,
            'date_paiement' => $this->date_paiement,
            'reference' => $this->reference,
            'statut' => $this->statut,
            'note' => $this->note,
            'created_at' => $this->created_at,
        ];
    }
}
