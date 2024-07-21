<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commandedetail extends Model
{
    use HasFactory;
    
    protected $fillable=[
        'qte' , 
        'id_user' , 
        'id_prod' , 
    ] ;  
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function product(){
        return $this->belongsTo(Produit::class);
    }
}
