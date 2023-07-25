<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ResultsController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/yorikboss', function () {
    return Inertia::render('YorikBoss');
});

Route::get('/addition', function () {
    return Inertia::render('Addition');
})->middleware(['auth', 'verified']);

Route::group(['middleware' => 'auth'], function (){
    // Route::post('/upload', [TempFileController::class, 'upload']);
    // Route::delete('/upload', [TempFileController::class, 'delete']);
    // Route::post('/save', [FileController::class, 'store']);
    // Route::post('/edit/{file}', [FileController::class, 'update'])->can('update', 'file');
    // Route::delete('/delete/{file}', [FileController::class, 'destroy'])->can('delete', 'file');
    // Route::get('/load/{serverId}', [FileController::class, 'load']);

    // Route::get('/save', [ResultsController::class, 'store']);

    
    Route::post('/save_statistics', [ResultsController::class, 'save']);
    Route::get('/multiplication', [ResultsController::class, 'store']);
    Route::get('/results', [ResultsController::class, 'storeAll']);
});

require __DIR__.'/auth.php';
