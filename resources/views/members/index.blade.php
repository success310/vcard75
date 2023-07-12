@extends('layouts.app')
@section('title')
  {{__('messages.members')}}
@endsection
@section('content')
  <div class="container-fluid">
    <div class="d-flex flex-column table-striped">
      @include('flash::message')
      <livewire:member-table/>
    </div>
  </div>
@endsection
