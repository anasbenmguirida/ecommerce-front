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
        Schema::create('chariots', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_cli')->nullable() ; 
            $table->foreign('id_cli')->references('id')->on('users') ; 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chariots');
    }
};
