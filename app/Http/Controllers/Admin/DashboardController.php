<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Contact;
use App\Models\Movies;
use App\Models\Project;
use App\Models\Testimonial;
use App\Models\User;
use App\Models\Visit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function dashboard()
    {
        $totalvisits = Visit::sum('no_of_visits');
        $date = \Carbon\Carbon::today()->subDays(30);
        $visitdate = Visit::where('visit_date', '>=', $date)->pluck('visit_date');
        $visits = Visit::where('visit_date', '>=', $date)->pluck('no_of_visits');
        $totalblogs = Blog::all()->count();
        $movies=Movies::all();
        $totalusers = User::where('role', 'User')->count();
        $activeusers = User::where('role', 'User')->where('status', 'active')->count();
        $totalinactiveusers = User::where('role', 'User')->where('status', 'inactive')->count() ;


        return Inertia::render('Dashboard', [
            'totalvisits' => $totalvisits,
            'visitdate' => $visitdate,
            'visits' => $visits,
            'totalblogs' => $totalblogs,
            'movies' => $movies,
            'totalusers' => $totalusers,
            'activeusers' => $activeusers,
            'inactiveusers' => $totalinactiveusers,
        ]);
    }
}
