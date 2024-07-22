<?php

namespace App\Http\Controllers;

use App\Models\Produitchariot;
use Illuminate\Http\Request;

class ClientController extends Controller
{
   public function showProductChart($id){
    // 2 jointures a faire 
    
    $produitchariot=Produitchariot::all() ; 
    return response()->json(['succes' => $produitchariot]); 
    
   }

    public function addToChart(Request $request , $id){

    }
}
