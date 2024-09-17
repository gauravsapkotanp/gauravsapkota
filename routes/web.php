<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MovieController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\KhaltiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


Route::get('/', [FrontendController::class, "main"])->name('main');
Route::get('/getstarted', [FrontendController::class, "getstarted"])->name('getstarted');
Route::get('/signup', [FrontendController::class, "signup"])->name('signup');
Route::get('/signup/step2', [FrontendController::class, "signupstep2"])->name('signupstep2');
Route::get('/signup/step3', [FrontendController::class, "signupstep3"])->name('signupstep3');
Route::get('/signup/planform', [FrontendController::class, "planform"])->name('planform');
Route::get('/choosepaymentmethod', [FrontendController::class, "choosepayment"])->name('choosepayment');
Route::get('/home', [FrontendController::class, "home"])->name('home');
Route::get('/blog/{id}', [FrontendController::class, 'singleBlog'])->name('singleBlog.show');
Route::get('/project/{id}', [FrontendController::class, 'singleProject'])->name('singleProject.show');
Route::get('/blogs', [FrontendController::class, 'allBlogs'])->name('allBlogs');
Route::get('/projects', [FrontendController::class, 'allProjects'])->name('allProjects');
 

Route::post('/khalti/initiate', [KhaltiController::class, 'initiatePayment'])->name('khalti.initiate');





Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //dashboard
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
   //blogs
    Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
    Route::get('/blogs/create', [BlogController::class, 'create'])->name('blogs.create');
    Route::post('/blogs/store', [BlogController::class, 'store'])->name('blogs.store');
    Route::get('/blogs/edit/{blog}', [BlogController::class, 'edit'])->name('blogs.edit');
    Route::post('/blogs/update/{blog}', [BlogController::class, 'update'])->name('blogs.update');
    Route::get('/blogs/delete/{blog}', [BlogController::class, 'delete'])->name('blogs.delete');

     //movies
    Route::get('/movies', [MovieController::class, 'index'])->name('movies.index');
    Route::get('/movies/create', [MovieController::class, 'create'])->name('movies.create');
    Route::post('/movies/store', [MovieController::class, 'store'])->name('movies.store');
    Route::get('/movies/edit/{movie}', [MovieController::class, 'edit'])->name('movies.edit');
    Route::post('/movies/update/{movie}', [MovieController::class, 'update'])->name('movies.update');
    Route::get('/movies/delete/{movie}', [MovieController::class, 'delete'])->name('movies.delete');

 
});

require __DIR__ . '/auth.php';
