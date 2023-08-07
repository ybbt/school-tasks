<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SaveResultRequest;
use App\Http\Resources\ResultResource;
// use App\Models\Result;
use Inertia\Inertia;

class ResultsController extends Controller
{
    public function index(){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->get());

        return Inertia::render('Results', ['results' => $userResults]);
    }

    public function save_result(SaveResultRequest $request){
        $createdResult = auth()->user()->result()->create($request->validated());
        
        if ($request->input('operation_id') === 'multiplication') {
            return redirect('/multiplication');
        } else if ($request->input('operation_id') === 'division') {
            return redirect('/division');
        }
    }
}
