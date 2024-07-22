<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productschariot extends Model
{
    use HasFactory;
    protected $fillable=[
        'id_produit' , 
        'id_chariot' ,
    ];
    public function produits(){
        return $this->belongsTo(Produit::class);
    }
    public function chariots(){
     return $this->belongsTo(Chariot::class) ; 
    }
}
