<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommandeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'client' => [
                'id' => $this->client->id,
                'nom_complet' => "{$this->client->prenom} {$this->client->nom}",
            ],
            'prix' => $this->prix,
            'statut' => $this->statut,
            'notes' => $this->notes,
            'a_une_invitation' => $this->invitation !== null,
            'invitation' => $this->whenLoaded('invitation', fn () => $this->invitation ? ['id' => $this->invitation->id,] : null),
            'created_at' => $this->created_at,
        ];
    }
}
