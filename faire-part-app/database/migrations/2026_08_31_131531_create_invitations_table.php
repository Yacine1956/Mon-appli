<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('commande_id')->unique()->constrained()->cascadeOnDelete();
            $table->string('slug')->unique();
            $table->string('template');
            $table->string('statut')->default('brouillon');
            $table->string('noms_maries');
            $table->date('date_mariage');
            $table->time('heure_ceremonie')->nullable();
            $table->time('heure_reception')->nullable();
            $table->string('lieu_ceremonie')->nullable();
            $table->string('lieu_reception')->nullable();
            $table->text('message_bienvenue')->nullable();
            $table->string('musique_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};
