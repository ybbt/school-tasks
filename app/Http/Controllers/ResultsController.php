<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SaveResultRequest;
use App\Http\Resources\ResultResource;
// use App\Models\Result;
use Inertia\Inertia;

class ResultsController extends Controller
{
    // DONE з'єднати збереження в БД в одну функцію, рендерити по додатковому параметру

    // public function save_multiplication(SaveResultRequest $request){
    //     $createdResult = auth()->user()->result()->create($request->validated());
        
    //     return redirect('/multiplication');
    // }

    public function index(){
        $userResults = ResultResource::collection(auth()->user()->result()->orderBy('created_at', 'DESC')->get());

        return Inertia::render('Results', ['results' => $userResults]);
    }

    // public function save_division(SaveResultRequest $request){
    //     $createdResult = auth()->user()->result()->create($request->validated());

    //     return redirect('/division');
    // }

    public function save_result(SaveResultRequest $request){
        $createdResult = auth()->user()->result()->create($request->validated());
        
        if ($request->input('operation_id') === 'multiplication') {
            return redirect('/multiplication');
        } else if ($request->input('operation_id') === 'division') {
            return redirect('/division');
        }
    }
}
