@extends('layouts.app')
@section('title')
  {{__('messages.rcards')}}
@endsection
@section('content')
  <div class="container-fluid">
    <div class="d-flex flex-column table-striped">
      @include('flash::message')
      <livewire:member-rcard-table/>
    </div>
  </div>
@endsection
