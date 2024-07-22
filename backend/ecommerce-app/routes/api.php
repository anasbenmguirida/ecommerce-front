<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController ; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// routes public 
Route::post('/register', [AuthController::class , 'register']);
Route::post('/login' , [AuthController::class , 'login']) ; 
Route::get('/afficher-produits' , [AdminController::class , 'ShowAllproducts']) ;


// route de l'admin CRUD pour les produit 
Route::post('/ajouter-produit' , [AdminController::class , 'Addproduct']) ; 
Route::put('/modifier-produit/{id}' , [AdminController::class , 'Updateproduit']) ; 
Route::delete('/supprimer-produit/{id}', [AdminController::class, 'Deleteproduit']);
