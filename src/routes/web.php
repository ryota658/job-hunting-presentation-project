<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\postController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/', [postController::class, 'show']);

Route::get('/signUp', function () {
    return view('signUp');
});
Route::get('/attendanceManegementDay', function () {
    return view('attendanceManegementDay');
});

Route::post('/felica-reader', 'FelicaReader@get_Idm');

