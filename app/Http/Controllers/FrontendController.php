<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Visit;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function visits()
    {
        if (!Session::has('visit')) {

            $last_date = Visit::latest('visit_date')->first();
            $visit_date = date('Y-m-d');
            if ($last_date) {
                if ($last_date->visit_date != $visit_date) {
                    $no_of_visits = 1;
                    $d = new Visit();
                    $d->visit_date = $visit_date;
                    $d->no_of_visits = $no_of_visits;
                    $d->save();
                } else {
                    $newvisit = $last_date->no_of_visits + 1;
                    Visit::where('visit_date', $visit_date)->update(['no_of_visits' => $newvisit]);
                }
            } else {
                $no_of_visits = 1;
                $d = new Visit();
                $d->visit_date = $visit_date;
                $d->no_of_visits = $no_of_visits;
                $d->save();
            }
            Session::put('visit', 'yes');
            Session::save();
        }
    }

    public function home()
    {
        $this->visits();
        $blogs = Blog::latest()->take(3)->get();
        return Inertia::render('Welcome', [
            'blogs' => $blogs,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

     public function getstarted()
    {
        $this->visits();
        return Inertia::render('LoginSignup', [
        ]);
    }
    
     public function main()
    {
        $this->visits();
        return Inertia::render('MainPage', [
        ]);
    }
    
     public function signup()
    {
        $this->visits();
        return Inertia::render('SignUp', [
        ]);
    }

     public function signupstep2()
    {
        $this->visits();
        return Inertia::render('SignUpStep2', [
        ]);
    }

    
     public function signupstep3()
    {
        $this->visits();
        return Inertia::render('SignUpStep3', [
        ]);
    }

     public function planform()
    {
        $this->visits();
        return Inertia::render('PlanForm', [
        ]);
    }


   public function choosepayment(Request $request)
{
    $this->visits();
    // Retrieve the price from the query parameter
    $price = $request->input('price');

    return Inertia::render('ChoosePayment', [
        'price' => $price, // Pass the price to the view
    ]);
}
}


      
 