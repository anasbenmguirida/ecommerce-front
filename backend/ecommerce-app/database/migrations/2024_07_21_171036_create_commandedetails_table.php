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
        Schema::create('commandedetails', function (Blueprint $table) {
            $table->id();
            $table->integer('qte') ; 
            $table->unsignedBigInteger('id_user')->nullable() ; 
            $table->unsignedBigInteger('id_prod')->nullable() ; 
            $table->foreign('id_user')->references('id')->on('users') ;
            $table->foreign('id_prod')->references('id')->on('produits');  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandedetails');
    }
};
