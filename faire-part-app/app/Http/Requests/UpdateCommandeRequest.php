<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCommandeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'client_id' => ['sometimes', 'required', 'exists:clients,id'],
            'prix' => ['sometimes', 'required', 'numeric', 'min:0'],
            'statut' => ['sometimes', 'required', Rule::in([
                'en_attente', 'en_preparation', 'en_revision',
                'en_attente_paiement', 'payee', 'livree', 'terminee', 'annulee',
            ])],
            'notes' => ['nullable', 'string'],
        ];
    }
}
