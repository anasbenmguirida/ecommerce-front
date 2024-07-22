<?php

namespace App\Http\Controllers;

use App\Models\Productschariot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
   public function showProductChariot(){
    $results = DB::table('produits')
    ->join('productschariots', 'produits.id', '=', 'productschariots.id_produit')
    ->select('produits.*')
    ->get();
     return response()->json(['succes'=>$results]); 
}
// KCCh3Obn149USjgThHR6CMLHwqqyCKYdyPUGdxdg3f282b03 for tests
    public function addToChart(Request $request){
        // get the user id 
        $user_id = auth()->user()->id;
        $id_produit=$request->id ; 
        $id_chariot = DB::table('chariots')
        ->select('id')
        ->where('id_cli', '=', $user_id)
        ->first();
        $produitchariot=Productschariot::create([
            'id_produit' =>$id_produit , 
            'id_chariot' => $id_chariot->id,
        ]) ; 
     
    return response()->json(['produit ajoute avec succes' => $produitchariot]); 
    }
}
