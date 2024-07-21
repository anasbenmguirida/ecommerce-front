<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom' , 
        'description' , 
        'quantite',
        'prix',

    ] ;
    public function user(){
        return $this->hasMany(User::class) ; 
    }
    public function chariot(){
        return $this->hasMany(Chariot::class) ; 
    }
}
