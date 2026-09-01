<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\InvitationResource;
use App\Models\Invitation;

class PublicInvitationController extends Controller
{
    public function show(string $slug)
    {
        $invitation = Invitation::where('slug', $slug)
            ->where('statut', 'publiee')
            ->with('photos')
            ->firstOrFail();

        return new InvitationResource($invitation);
    }
}
