<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvitationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'commande_id' => $this->commande_id,
            'slug' => $this->slug,
            'template' => $this->template,
            'statut' => $this->statut,
            'noms_maries' => $this->noms_maries,
            'date_mariage' => $this->date_mariage,
            'heure_ceremonie' => $this->heure_ceremonie,
            'heure_reception' => $this->heure_reception,
            'lieu_ceremonie' => $this->lieu_ceremonie,
            'lieu_reception' => $this->lieu_reception,
            'message_bienvenue' => $this->message_bienvenue,
            'musique_url' => $this->musique_path ? asset("storage/{$this->musique_path}") : null,
            'lien_public' => config('app.frontend_url', 'http://localhost:5173')."/invitation/{$this->slug}",
            'photos' => PhotoInvitationResource::collection($this->whenLoaded('photos')),
            'created_at' => $this->created_at,
        ];
    }
}
