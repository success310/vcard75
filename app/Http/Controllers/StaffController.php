<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateStaffRequest;
use App\Repositories\StaffRepository;

class StaffController extends Controller
{
  /**
   * @var StaffRepository
   */
  public StaffRepository $staffRepo;

  public function index()
  {
    return view('staff.index');
  }

  public function create()
  {
    return view('staff.create');
  }

  public function store(CreateStaffRequest $request)
  {
    $input = $request->all();
    $this->staffRepo->store($input);

    Flash::success(__('messages.flash.staff_create'));

    return redirect(route('staff.index'));
  }
}