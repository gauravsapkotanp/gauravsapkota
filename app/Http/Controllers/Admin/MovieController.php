<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movies::all();
        return Inertia::render('Admin/movies/index', [
            'movies' => $movies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Admin/movies/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    
       
       $data = $request->validate([
    'title' => 'required ',
    'year' => 'required ',
    'country' => 'required ',
    'genre' => 'required ',
    'type' => 'required ',
    'rating' => 'required ',
    'actor' => 'required ',
    'director' => 'required ',
    'quality' => 'required ',
    'imdb' => 'required ',
    'duration' => 'required ',
    'description' => 'required ',
    'link' => 'required ',
    'thumbnail' => 'required ',
    'images' => 'required ', 
    'language' => 'required ',
]);
 

        //file name with extentsion
        $filenameWithExt_image = $request->file('thumbnail')->getClientOriginalName();
        //only file name
        $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
        //only extension
        $extension_image = $request->file('thumbnail')->getClientOriginalExtension();
        //file name to store
        $image = $filename_image . '_' . time() . '.' . $extension_image;

        //Move file to desired location
        $path = $request->file('thumbnail')->move('img/movies/', $image);
        $data['thumbnail'] = $image;

          //file name with extentsion
        $filenameWithExt_image = $request->file('images')->getClientOriginalName();
        //only file name
        $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
        //only extension
        $extension_image = $request->file('images')->getClientOriginalExtension();
        //file name to store
        $image = $filename_image . '_' . time() . '.' . $extension_image;

        //Move file to desired location
        $path = $request->file('images')->move('img/movies/', $image);
        $data['images'] = $image;

        Movies::create($data);

        return redirect(route('movies.index'))->with('message', 'Movie Created Successfully');



    }

    /**
     * Display the specified resource.
     */
    public function show(Movies $movies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id)
    {

        $movies = Movies::find($id);
        return Inertia::render('Admin/movies/edit', [
            'movies' => $movies,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'title' => 'required ',
            'year' => 'required ',
            'country' => 'required ',
            'genre' => 'required ',
            'type' => 'required ',
            'rating' => 'required ',
            'actor' => 'required ',
            'director' => 'required ',
            'quality' => 'required ',
            'imdb' => 'required ',
            'duration' => 'required ',
            'description' => 'required ',
            'link' => 'required ',
            'thumbnail' => 'nullable ',
            'images' => 'nullable ', 
            'language' => 'required ',
        ]);

        $movie = Movies::find($id);
        if ($request->hasFile('thumbnail')) {
            //file name with extentsion
            $filenameWithExt_image = $request->file('thumbnail')->getClientOriginalName();
            //only file name
            $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
            //only extension
            $extension_image = $request->file('thumbnail')->getClientOriginalExtension();
            //file name to store
            $image = $filename_image . '_' . time() . '.' . $extension_image;
            //Move file to desired location
            $path = $request->file('thumbnail')->move('img/movies/', $image);
            File::delete(public_path("img/movies/" . $movie->thumbnail));
            $data['thumbnail'] = $image;
        }
        if ($request->hasFile('images')) {
            //file name with extentsion
            $filenameWithExt_image = $request->file('images')->getClientOriginalName();
            //only file name
            $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
            //only extension
            $extension_image = $request->file('images')->getClientOriginalExtension();
            //file name to store
            $image = $filename_image . '_' . time() . '.' . $extension_image;
            //Move file to desired location
            $path = $request->file('images')->move('img/movies/', $image);
            File::delete(public_path("img/movies/" . $movie->images));
            $data['images'] = $image;
        }
        $movie->update($data);
        return redirect(route('movies.index'))->with('message', 'Movie Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movies $movie)
    {
        //
    }

    public function delete(Movies $movie)
    {
        $movie->delete();
        return back()->with('message', 'Movie Deleted Successfully');
    }
}
