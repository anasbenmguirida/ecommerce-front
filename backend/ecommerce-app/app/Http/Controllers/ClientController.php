<?php

namespace App\Http\Controllers;

use App\Models\Productschariot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Commandedetail ; 

class ClientController extends Controller
{
   public function showProductChariot(){
    $results = DB::table('produits')
    ->join('productschariots', 'produits.id', '=', 'productschariots.id_produit')
    ->select('produits.*')
    ->get();
     return response()->json(['succes'=>$results]); 
}
// token for tests 
//8g3lcsDIWFvEc5n49O7ovhr6D8OK5PK4M4M5eNRUd5e4889a
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

    public function Supprimerproduit($id){
        $produitchariot=Productschariot::where('id_produit', $id) ; 
        $deletedfromchart=$produitchariot->delete() ; 
        if($deletedfromchart){
            return response()->json(['succes' =>  'product deleted succesfully from chart']) ;
        }
        else{
            return response()->json(['fail' =>  'product not deleted succesfully from chart']) ;

        }

    }
    public function Commander(Request $request){
        // commandedetails => id_user , id_prod , qte 
        $id_user=auth()->user()->id ; 
        $results = DB::table('produits')
       ->join('productschariots', 'produits.id', '=', 'productschariots.id_produit')
       ->select('produits.*')
       ->get();
        foreach($results as $produit){
            $commandedetails=Commandedetail::create([
            'id_user'=>$id_user , 
            'id_prod'=>$produit->id,
            'qte'=>1 // hadi par defaut
            ]);
        }
       $produitscommande = DB::table('produits')
       ->join('commandedetails', 'produits.id', '=', 'commandedetails.id_prod')
       ->select('produits.*' , 'commandedetails.qte')
       ->distinct()
       ->get();
       $total=0 ;
       foreach($produitscommande as $produit){
        $total=$total+($produit->prix*$produit->qte) ;  
       }
       return response()->json(['succes' => 'details de la commande : ' 
       ,$produitscommande , 'total' => $total]) ;
    }
}
