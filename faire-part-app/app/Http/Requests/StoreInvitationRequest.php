<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvitationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'template' => ['required', 'string'],
            'noms_maries' => ['required', 'string', 'max:255'],
            'date_mariage' => ['required', 'date'],
            'heure_ceremonie' => ['nullable', 'date_format:H:i'],
            'heure_reception' => ['nullable', 'date_format:H:i'],
            'lieu_ceremonie' => ['nullable', 'string', 'max:255'],
            'lieu_reception' => ['nullable', 'string', 'max:255'],
            'message_bienvenue' => ['nullable', 'string'],
        ];
    }
}
