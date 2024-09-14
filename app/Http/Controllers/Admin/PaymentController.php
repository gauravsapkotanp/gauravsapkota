<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PaymentController extends Controller
{
    public function paymentSuccess(Request $request)
    {
        // Retrieve the transaction data
        $refId = $request->input('refId');
        $amount = $request->input('amt');
        $productId = $request->input('pid');

        // Call eSewa API to verify the transaction
        $response = Http::post('https://esewa.com.np/epay/transrec', [
            'amt' => $amount,
            'rid' => $refId,
            'pid' => $productId,
            'scd' => 'YOUR_MERCHANT_CODE'
        ]);

        if ($response->body() === 'Success') {
            // Handle success, e.g., update order status
            return view('payment-success');
        } else {
            // Handle failure
            return view('payment-failure');
        }
    }

    public function paymentFailure()
    {
        // Handle payment failure
        return view('payment-failure');
    }
}
