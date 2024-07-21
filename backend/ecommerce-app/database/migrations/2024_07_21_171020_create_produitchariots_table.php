<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productschariots', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_produit')->nullable() ; 
            $table->unsignedBigInteger('id_chariot')->nullable(); 
            $table->foreign('id_produit')->references('id')->on('produits');
            $table->foreign('id_chariot')->references('id')->on('chariots');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productschariots');
    }
};
