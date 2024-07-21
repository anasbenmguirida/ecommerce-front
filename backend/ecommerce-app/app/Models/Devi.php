<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devi extends Model
{
    use HasFactory;
    protected $fillable = [
        'prix_ttc' , 
        'id_user',

    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
