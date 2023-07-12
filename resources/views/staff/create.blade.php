@extends('layouts.app')
@section('title')
    {{__('messages.staff_members.add_staff_member')}}
@endsection
@section('content')
    <div class="container-fluid">
        <div class="d-flex flex-column">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-end mb-5">
                    <h1>{{__('messages.staff_members.add_staff_member')}}</h1>
                    <a class="btn btn-outline-primary float-end"
                       href="{{ route('staff.index') }}">{{ __('messages.common.back') }}</a>
                </div>

                <div class="col-12">
                    @include('layouts.errors')
                </div>
                <div class="card">
                    <div class="card-body">
                        {!! Form::open(['route' => 'staff.store','files' => 'true','id'=>'staffCreateForm']) !!}
                        @include('staff.fields')
                        {{ Form::close() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
