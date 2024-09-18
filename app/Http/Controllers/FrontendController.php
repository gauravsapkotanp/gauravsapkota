<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Movies;
use App\Models\User;
use App\Models\Visit;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
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
        $movies=Movies::all();
        return Inertia::render('Welcome', [
            'movies' => $movies,
            
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
    
   public function signup(Request $request)
{
    $this->visits();
    return Inertia::render('SignUp', [
        'email' => $request->input('email'),   
    ]);
}

public function signupstep2(Request $request)
{
    $this->visits();
    return Inertia::render('SignUpStep2', [
        'email' => $request->input('email'),   
    ]);
}

public function signupstep3(Request $request)
{
    $this->visits();
    
    $request->validate([
        'email' => 'required|email|unique:users,email', 
        'password' => 'required|min:6',
    ]);

    $user = User::create([
        'email' => $request->input('email'),
        'password' => Hash::make($request->input('password')),  
        'status' => 'inactive',  
        'role' => 'User',  
    ]);
    return Inertia::render('SignUpStep3', [
        'email' => $request->input('email'),
    ]);
}


     public function planform()
    {
        $this->visits();
        return Inertia::render('PlanForm', [
        ]);
    }

    
     public function watchmovie($id)
    {
        $this->visits();
        $movie=Movies::find($id);
        $movies=Movies::where('id', '!=', $movie->id)->get();
        return Inertia::render('WatchMovie', [
            'movies' => $movies,
            'movie' => $movie,
        ]);
    }


   public function choosepayment(Request $request)
{
    $this->visits();
    $price = $request->input('price');
    return Inertia::render('ChoosePayment', [
        'price' => $price,  
    ]);
}
 
}


      
 