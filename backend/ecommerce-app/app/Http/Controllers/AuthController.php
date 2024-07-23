<?php

namespace App\Http\Controllers;

use App\Models\Chariot;
use Illuminate\Http\Request;
use App\Models\User ;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth ; 
use Laravel\Sanctum\Sanctum ; 

class AuthController extends Controller
{
    public function register(Request $request){
        $data=$request->validate([
            'name' => 'required|string', 
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);
        if($data){
            $User=User::create([
                'name' => $data['name'],
                'email' => $data['email'] ,
                'password' => Hash::make($data['password']),
            ]) ; 
            $chariot=Chariot::create([
                'id_cli' => $request->user()->id
                ]) ; 
            return response()->json(['message' => 'user created succesfully ']) ; 
        }
        else{
            return response()->json(['message' => 'un erreur est survenu !  ']) ;
        }
        
    }


    // login 
    public function login(Request $request){
        $data=$request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8'
            ]);
        if (Auth::attempt($data)){
                $token = $request->user()->createToken('UserToken')->plainTextToken;
                return response()->json(['message' => 'User : ' , $data ,$token]) ; 
            }
        else{
                return response()->json(['message' => 'email ou mot de passe invalide ']) ;
            }
            
    }

    public function logout(Request $request){
       $deconected= $request->user()->currentAccessToken()->delete();
       if($deconected){
        return response()->json(['succes' => 'user deconnected succesfully']); 
       }
       else{
        return response()->json(['error' => 'user not deconnected ']);
       }
    }

    public function user_profile()
    {
        return response()->json(auth()->user());
    }
}