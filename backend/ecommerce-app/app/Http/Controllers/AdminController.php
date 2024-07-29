<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produit ;
use Illuminate\Foundation\Console\UpCommand;

class AdminController extends Controller
{
    //the admin can create/update/delete a product , its a crud basically 
    public function Addproduct(Request $request){
      $produitinfo=$request->validate([
        'nom' => 'required|string' , 
        'description' => 'required|string'  , 
        'quantite' => 'required|integer' , 
        'prix'=>'required|numeric',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        
      ]);
          $image=$request->file('image');
          $imageName = time() . '.' . $image->getClientOriginalExtension();
          // the image is stored in the public/images directory
          $image->move(public_path('images'), $imageName);
           // Get the image path
          $imagePath = 'images/' . $imageName;
         
          if($produitinfo){
            $produit=Produit::create([ 
            'nom' =>$produitinfo['nom'] ,
            'description' => $produitinfo['description'] , 
            'quantite' => $produitinfo['quantite'],
            'prix'=> $produitinfo['prix'],
            'image'=>$imagePath, 
            
          ]); 

          

        return response()->json(['message'=>'produit ajouter avec succes' , $produit]) ; 
     }
     else{
        return response()->json(['message'=>'une erreur est survenue']) ; 
     }

    }
    
    //update
    public function Updateproduit(Request $request , $id){
       $newInfos=$request->validate([
        'nom' => 'required|string' , 
        'description' => 'required|string'  , 
        'quantite' => 'required|integer' , 
        'prix'=>'required|numeric'
       ]);
       $produitConserne=Produit::find($id) ; 
       //type record f plsql
       $update=$produitConserne->update($newInfos) ; 
       if($update){
        return response()->json(['message'=>'updated succesfully']); 
       }
       
    }
   //all products
    public function ShowAllproducts(){
        $produits=Produit::all() ;
        return response()->json($produits); 
        
    }
 
    public function Deleteproduit($id){
      $produit=Produit::find($id) ;
      // rowtype
      $produitSupprime=$produit->delete() ; 
      if($produitSupprime){
        return response()->json(['message' => 'Produit supprimer avec succes']) ; 
      }
      else{
        return response()->json(['message' => 'Une erreur et le produit nest pas supprime']) ; 
      }
    }  


}

