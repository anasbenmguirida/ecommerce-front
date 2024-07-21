<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chariot extends Model
{
    use HasFactory;
    protected $fillable=[
        'id_cli' , 
    ];
    // decrire les relations entre les tables de la base de donnees 
    
    
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function produits(){
        return $this->hasMany(Produit::class) ; 
    }
}
