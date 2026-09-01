<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PhotoInvitation extends Model
{
    protected $table = 'photos_invitation';

    protected $fillable = ['invitation_id', 'chemin', 'ordre'];

    public function invitation(): BelongsTo
    {
        return $this->belongsTo(Invitation::class);
    }
}
