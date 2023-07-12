@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
        <img src="{{ getLogoUrl() }}" class="logo" alt="{{ getAppName() }}">
        @endcomponent
    @endslot


    {{-- Body --}}
    <div>
        <h2>{{ __('messages.mail.hello') }} <b>{{ $data['user']['first_name'] . ' ' . $data['user']['last_name'] }}</b></h2>
            <p> {{ __('messages.mail.password_change')}} </p>
            @component('mail::button', ['url' => $data['url']])
            {{ __('messages.user.change_password') }}
        @endcomponent
        <p>{{ __('messages.mail.please_contact_your_admin') }}</p>
        <p>{{ __('messages.mail.thanks_regard') }}</p>
        <p>{{ getAppName() }}</p>
    </div>


    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            <h6>© {{ date('Y') }} {{ getAppName() }}.</h6>
        @endcomponent
    @endslot
@endcomponent
