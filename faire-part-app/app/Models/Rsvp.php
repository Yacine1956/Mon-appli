<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rsvp extends Model
{
    protected $fillable = ['invitation_id', 'nom', 'telephone', 'presence', 'nombre_personnes', 'message'];

    protected $casts = ['presence' => 'boolean'];

    public function invitation(): BelongsTo
    {
        return $this->belongsTo(Invitation::class);
    }
}
