<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCommandeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'client_id' => ['required', 'exists:clients,id'],
            'prix' => ['required', 'numeric', 'min:0'],
            'statut' => ['required', Rule::in([
                'en_attente', 'en_preparation', 'en_revision',
                'en_attente_paiement', 'payee', 'livree', 'terminee', 'annulee',
            ])],
            'notes' => ['nullable', 'string'],
        ];
    }
}
