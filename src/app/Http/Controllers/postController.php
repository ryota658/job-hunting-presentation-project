<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class postController extends Controller
{
    //
    public function show(Request $request) {
        $data = [
            "name" => $request->name,
        ];
        return view("welcome", compact('data'));
    }
}
