<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Invitation extends Model
{
    protected $fillable = [
        'commande_id', 'slug', 'template', 'statut', 'noms_maries',
        'date_mariage', 'heure_ceremonie', 'heure_reception',
        'lieu_ceremonie', 'lieu_reception', 'message_bienvenue', 'musique_path',
    ];

    protected $casts = [
        'date_mariage' => 'date',
    ];

    public function commande(): BelongsTo
    {
        return $this->belongsTo(Commande::class);
    }

    public function rsvps(): HasMany
    {
        return $this->hasMany(Rsvp::class);
    }

    public function messagesLivreOr(): HasMany
    {
        return $this->hasMany(MessageLivreOr::class);
    }

    public function photos(): HasMany
    {
       return $this->hasMany(PhotoInvitation::class)->orderBy('ordre');
    }
}
