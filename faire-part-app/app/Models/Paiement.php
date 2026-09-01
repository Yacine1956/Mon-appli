<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Paiement extends Model
{
    protected $fillable = [
        'commande_id', 'montant', 'moyen_paiement',
        'date_paiement', 'reference', 'statut', 'note',
    ];

    protected $casts = [
        'date_paiement' => 'date',
    ];

    public function commande(): BelongsTo
    {
        return $this->belongsTo(Commande::class);
    }
}
