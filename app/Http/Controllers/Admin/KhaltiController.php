<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class KhaltiController extends Controller
{
    public function initiatePayment(Request $request)
    {
        $args = http_build_query([
            'amount' => $request->input('amount'),
            'product_identity' => $request->input('product_identity'),
            'product_name' => $request->input('product_name'),
            'product_url' => $request->input('product_url'),
        ]);

        $url = "https://a.khalti.com/api/v2/epayment/initiate/";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $args);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $headers = ['Authorization: key live_secret_key_68791341fdd94846a146f0457ff7b455', 'Content-Type: application/x-www-form-urlencoded'];
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);
        $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($status_code == 200) {
            $data = json_decode($response, true);
            return Inertia::render('PaymentRedirect', [
                'paymentUrl' => $data['url'] ?? '#'
            ]);
        } else {
            return Inertia::render('PaymentError', [
                'message' => 'Failed to initiate payment'
            ]);
        }
    }
}
