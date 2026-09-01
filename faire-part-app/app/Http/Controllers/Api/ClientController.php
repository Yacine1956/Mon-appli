<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index(Request $request)
    {
        $clients = Client::withCount('commandes')
            ->when($request->search, fn ($q) => $q->where('nom', 'like', "%{$request->search}%")
                ->orWhere('prenom', 'like', "%{$request->search}%")
                ->orWhere('telephone', 'like', "%{$request->search}%"))
            ->latest()
            ->paginate(15);

        return ClientResource::collection($clients);
    }

    public function store(StoreClientRequest $request)
    {
        $client = Client::create($request->validated());

        return new ClientResource($client);
    }

    public function show(Client $client)
    {
        return new ClientResource($client->load('commandes'));
    }

    public function update(UpdateClientRequest $request, Client $client)
    {
        $client->update($request->validated());

        return new ClientResource($client);
    }

    public function destroy(Client $client)
    {
        $client->delete();

        return response()->noContent();
    }
}
