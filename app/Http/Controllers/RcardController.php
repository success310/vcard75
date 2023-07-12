<?php

namespace App\Http\Controllers;

class RcardController extends Controller
{
  public function index() {
    return view('rcards.index');
  }
}