<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClientController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\CommandeController;
use App\Http\Controllers\Api\PaiementController;
use App\Http\Controllers\Api\InvitationController;
use App\Http\Controllers\Api\PublicInvitationController;
use App\Http\Controllers\Api\PhotoInvitationController;


Route::middleware('throttle:60,1')->group(function () {
    Route::get('/public/invitations/{slug}', [PublicInvitationController::class, 'show']);
});


Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    Route::apiResource('clients', ClientController::class);
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::apiResource('commandes', CommandeController::class);
    Route::post('/commandes/{commande}/paiements', [PaiementController::class, 'store']);
    Route::delete('/commandes/{commande}/paiements/{paiement}', [PaiementController::class, 'destroy']);

    Route::post('/commandes/{commande}/invitation', [InvitationController::class, 'store']);
    Route::get('/invitations/{invitation}', [InvitationController::class, 'show']);
    Route::put('/invitations/{invitation}', [InvitationController::class, 'update']);
    Route::delete('/invitations/{invitation}', [InvitationController::class, 'destroy']);
    Route::post('/invitations/{invitation}/photos', [PhotoInvitationController::class, 'store']);
    Route::delete('/invitations/{invitation}/photos/{photo}', [PhotoInvitationController::class, 'destroy']);
    Route::post('/invitations/{invitation}/musique', [InvitationController::class, 'uploadMusique']);
    Route::delete('/invitations/{invitation}/musique', [InvitationController::class, 'supprimerMusique']);

});




