<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SaveResultRequest;
use App\Http\Resources\ResultResource;
use App\Models\Result;
use Inertia\Inertia;

class ResultsController extends Controller
{

    public function save(SaveResultRequest $request){
        $createdResult = auth()->user()->result()->create($request->validated());

        return redirect('/multiplication');
    }

    public function store(){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->whereRaw('created_at >= curdate()')/* ->where('created_at', '>', now()->subHours(24)) *//* ->take(10) */->get());

        return Inertia::render('Multiplication', ['results' => $userResults, 'operation' => 'multiplication']);
    }

    public function storeAll(){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->get());

        return Inertia::render('Results', ['results' => $userResults]);
    }
}
