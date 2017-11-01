<?php

namespace App\Http\Controllers\API;

use App\Models\Share;
use App\Http\Requests\API\ShareRequest;
use App\Http\Controllers\Controller;

class ShareController extends Controller
{
    /**
     * Create a new share instance for auth user after a valid request.
     *
     * @param  ShareRequest     $request
     * @return App\Models\Portfolio $portfolio
     */
    public function store(ShareRequest $request)
    {
        $data = $request->all();
        $data['lot'] = $data['average'] = $data['average_amount'] = $data['total_amount'] = $data['gain'] = 0;

        $share = Share::create($data);
        $share->load('symbol');

        return response()->json($share);
    }

    /**
     * Update given portfolio instance after a valid request.
     *
     * @param  PortfolioRequest     $request
     * @param  App\Models\Portfolio $portfolio
     * @return App\Models\Portfolio $portfolio
     */
    public function update()
    {
        
    }

    /**
     * Delete a share.
     *
     * @param Share $share
     * @return JsonResponse
     */
    public function destroy(Share $share)
    {
        $share->delete();
        
        return response()->json();   
    }
}