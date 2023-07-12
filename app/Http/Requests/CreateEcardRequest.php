<?php

namespace App\Http\Requests;

use App\Models\Language;
use Illuminate\Foundation\Http\FormRequest;

class CreateEcardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|max:10',
            'last_name' => 'required|max:10',
            'email' => 'required|email:filter',
            'occupation' => 'required|max:20',
            'phone' => 'required|numeric',
            'location' => 'required',
            'website' => 'required',
            'ecard-logo' => 'required|image|mimes:jpeg,png,jpg|dimensions:width=150,height=150',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'ecard-logo.dimensions' => 'E Card logo should have 150px width & hight.',
        ];
    }
}
