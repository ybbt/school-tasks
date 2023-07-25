<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SaveResultRequest;
use App\Http\Resources\ResultResource;
use App\Models\Result;
use Inertia\Inertia;

class ResultsController extends Controller
{
    // public function store()
    // {
    //     $result = new Result();
    //     $result->user_id = auth()->user()->id;
    //     $result->resolution_time = '0:5:21';
    //     $result->operation = "множення";
    //     $result->save();
    //     // dd(auth()->user()->id);
    // }

//     public function save(SaveResultRequest $request)
//     {
//         // $result = new Result();
//         // $result->user_id = auth()->user()->id;
//         // $result->resolution_time = $request->resolution_time;
//         // $result->operation = "$request->operation";
//         // $result->save();

//         $createdResult = auth()->user()->result()->create($request->validated());

//         // return new ResultResource($createdResult);

// /*         $userResults = ResultResource::collection(auth()->user()->result()->orderBy('id', 'DESC')->get());

//         return Inertia::render('Multiplication', ['results' => $userResults]); */

//         return redirect('/multiplication');

//         // dd($createdResult);
//     }

    public function store(){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->whereRaw('created_at >= curdate()')/* ->where('created_at', '>', now()->subHours(24)) *//* ->take(10) */->get());

        return Inertia::render('Multiplication', ['results' => $userResults, 'operation' => 'multiplication']);
    }

    public function storeAll(){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->get());
        
        // dd('Yorik');

        return Inertia::render('Results', ['results' => $userResults]);
    }
}
