@extends('layouts.app')
@section('title')
  {{__('messages.staff')}}
@endsection
@section('content')
  <div class="container-fluid">
    <div class="d-flex flex-column table-striped">
      @include('flash::message')
      <livewire:staff-table/>
    </div>
  </div>
@endsection
