<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Visit;
use Illuminate\Foundation\Application;
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


      
 
}
