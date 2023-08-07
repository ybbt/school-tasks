<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ResultResource;
// use App\Models\Result;
use Inertia\Inertia;

class MathTasksController extends Controller
{
     // XXX Винести отримання $userResults в окрему функцію

    // public function multiplication(){
    //     $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->whereRaw('created_at >= curdate()')/* ->where('created_at', '>', now()->subHours(24)) *//* ->take(10) */->get());

    //     return Inertia::render('Multiplication', ['results' => $userResults, 'operation' => 'multiplication']);
    // }
    
    // public function division(){
    //     $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->whereRaw('created_at >= curdate()')/* ->where('created_at', '>', now()->subHours(24)) *//* ->take(10) */->get());

    //     return Inertia::render('Division', ['results' => $userResults, 'operation' => 'division']);
    // }        
    
    public function simple_task(Request $request){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->whereRaw('created_at >= curdate()')/* ->where('created_at', '>', now()->subHours(24)) *//* ->take(10) */->get());

        // TODO Рендерити один файл з різними пропсами для вибору дії
        if ($request->path() === 'multiplication') {
            return Inertia::render('SimpleTask'/* 'Multiplication' */, ['results' => $userResults, 'operation' => 'multiplication']);
        } else if ($request->path() === 'division') {
            return Inertia::render('SimpleTask'/* 'Division' */, ['results' => $userResults, 'operation' => 'division']);
        }
    }
}
