<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ResultResource;
// use App\Models\Result;
use Inertia\Inertia;

class MathTasksController extends Controller
{
    public function simple_task(Request $request){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->whereRaw('created_at >= curdate()')/* ->where('created_at', '>', now()->subHours(24)) *//* ->take(10) */->get());

        $props = null;
        if ($request->path() === 'multiplication') {
            $props = ['results' => $userResults, 'operation' => 'multiplication'];
        } else if ($request->path() === 'division') {
            $props = ['results' => $userResults, 'operation' => 'division'];
        }
        
        return Inertia::render('SimpleTask', $props);

    }
}
