<div class="row">
    <div class="col-lg-6">
        <div class="mb-5">
            {{ Form::label('name', __('messages.staff_members.name').':', ['class' => 'form-label required']) }}
            {{ Form::text('name', isset($staff) ? $staff->name : null, ['class' => 'form-control', 'placeholder' => __('messages.form.name'), 'required', 'id' => 'staffFirstName']) }}
        </div>
    </div>
    <div class="col-lg-6 mb-5">
        {{ Form::label('email', __('messages.staff_members.email').':', ['class' => 'form-label required']) }}
        {{ Form::email('email', isset($staff) ? $staff->email : null, ['class' => 'form-control', 'placeholder' => __('messages.form.mail'), 'required']) }}
    </div>
    <div class="col-lg-6">
        {{ Form::label('contact', __('messages.staff_members.contact_no').':', ['class' => 'form-label']) }}
        {{ Form::tel('contact', isset($staff) && $staff->contact ? '+'.$staff->region_code.$staff->contact : null, ['class' => 'form-control', 'placeholder' => __('messages.form.contact'), 'onkeyup' => 'if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,"")','id'=>'phoneNumber']) }}
        {{ Form::hidden('region_code',isset($staff) ? $staff->region_code : null,['id'=>'prefix_code']) }}
        <p id="valid-msg"
           class="text-success d-none fw-400 fs-small mt-2">{{__('messages.placeholder.valid_number')}}</p>
        <p id="error-msg"
           class="text-danger d-none fw-400 fs-small mt-2">{{__('messages.placeholder.invalid_number')}}</p>
    </div>
    @if(!isset($staff))
        <div class="col-lg-6 mb-5">
            <label class="form-label required">{{ __('messages.staff_members.password').':' }}</label>
            <div class="mb-3 position-relative">
                <input class="form-control" id="password" type="password" name="password"
                       placeholder="{{__('messages.form.password')}}" autocomplete="off" required aria-label="Password"
                       data-toggle="password"/>
                <span class="position-absolute d-flex align-items-center top-0 bottom-0 end-0 me-4 input-icon input-password-hide cursor-pointer text-gray-600">
                                <i class="bi bi-eye-slash-fill"></i>
                            </span>
            </div>
        </div>

        <div class="col-lg-6 mb-5">
            <label class="form-label required">{{ __('messages.staff_members.confirm_password').':' }}</label>
            <div class="mb-3 position-relative">
                <input class="form-control " id="cPassword"
                       type="password" placeholder="{{__('messages.form.c_password')}}" name="password_confirmation"
                       autocomplete="off" required aria-label="Password" data-toggle="password"/>
                <span class="position-absolute d-flex align-items-center top-0 bottom-0 end-0 me-4 input-icon input-password-hide cursor-pointer text-gray-600">
                                <i class="bi bi-eye-slash-fill"></i>
                            </span>
            </div>
        </div>
    @endif
    <div class="col-lg-6">
        <div class="mb-5">
            {{ Form::label('contact', __('messages.plan.plan').':', ['class' => 'form-label']) }}
            {{ Form::select('plan_id', getALlPlanName() ,isset($staff) ? $subscription->plan_id : null , ['class' => 'form-select', 'id' => 'plan', 'data-control' => 'select2', 'placeholder'=>__("messages.plan.select_plan")]) }}
        </div>
    </div>
    <div class="col-lg-6">
        <div class="mb-5">
            <div class="mb-3" io-image-input="true">
                <label for="exampleInputImage" class="form-label">{{__('auth.app.profile').':' }}</label>
                <div class="d-block">
                    <div class="image-picker">
                        <div class="image previewImage" id="exampleInputImage"
                             style="background-image: url('{{ !empty($staff->profile_image) ? $staff->profile_image : asset('web/media/avatars/150-2.jpg') }}')">
                        </div>
                        <span class="picker-edit rounded-circle text-gray-500 fs-small" data-bs-toggle="tooltip"
                              data-placement="top" data-bs-original-title="{{__('messages.tooltip.profile')}}">
                    <label>
                        <i class="fa-solid fa-pen" id="profileImageIcon"></i>
                            <input type="file" id="profile_image" name="profile" class="image-upload d-none"
                                   accept="image/*"/>
                    </label>
                </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        {{ Form::submit(__('messages.common.save'),['class' => 'btn btn-primary me-3']) }}
        <a href="{{ route('staff.index') }}"
           class="btn btn-secondary">{{__('messages.common.discard')}}</a>
    </div>
</div>

