<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class UpdateInvitationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'template' => ['sometimes', 'required', 'string'],
            'noms_maries' => ['sometimes', 'required', 'string', 'max:255'],
            'date_mariage' => ['sometimes', 'required', 'date'],
            'heure_ceremonie' => ['nullable', 'date_format:H:i'],
            'heure_reception' => ['nullable', 'date_format:H:i'],
            'lieu_ceremonie' => ['nullable', 'string', 'max:255'],
            'lieu_reception' => ['nullable', 'string', 'max:255'],
            'message_bienvenue' => ['nullable', 'string'],
            'statut' => ['sometimes', 'required', Rule::in([
                'brouillon', 'preparation', 'revision', 'publiee', 'suspendue', 'archivee',
            ])],
            'slug' => ['sometimes', 'required', 'string', 'alpha_dash', Rule::unique('invitations', 'slug')->ignore($this->route('invitation'))],
        ];
    }
}
