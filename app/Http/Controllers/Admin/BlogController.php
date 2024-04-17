<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::all();
        return Inertia::render('Admin/blogs/index', [
            'blogs' => $blogs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Admin/blogs/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $data = $request->validate([
            'title' => 'required',
            'date' => 'required',
            'description' => 'required',
            'photopath' => 'required|image',
        ]);

        //file name with extentsion
        $filenameWithExt_image = $request->file('photopath')->getClientOriginalName();
        //only file name
        $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
        //only extension
        $extension_image = $request->file('photopath')->getClientOriginalExtension();
        //file name to store
        $image = $filename_image . '_' . time() . '.' . $extension_image;

        //Move file to desired location
        $path = $request->file('photopath')->move('img/blogs/', $image);
        $data['photopath'] = $image;
        
        Blog::create($data);

        return redirect()->route('blogs.index');
 
                // Blog::create($request);
                // return redirect(route('blog.index'))->with('success', 'Blog Created Successfully');


    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        
        return Inertia::render('Admin/blogs/edit', [
            'blog' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'title' => 'required',
            'date' => 'required',
            'description' => 'required',
            'photopath' => 'nullable',
        ]);

        $blog = Blog::find($id);
        if ($request->hasFile('photopath')) {
            //file name with extentsion
            $filenameWithExt_image = $request->file('photopath')->getClientOriginalName();
            //only file name
            $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
            //only extension
            $extension_image = $request->file('photopath')->getClientOriginalExtension();
            //file name to store
            $image = $filename_image . '_' . time() . '.' . $extension_image;
            //Move file to desired location
            $path = $request->file('photopath')->move('img/blogs/', $image);
            File::delete(public_path("img/blogs/" . $blog->photopath));
            $data['photopath'] = $image;
        }
        $blog->update($data);
        return redirect(route('blogs.index'))->with('success', 'Blog Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }

    public function delete(Blog $blog)
    {         
        $blog->delete();
        return back()->with('success', 'Blog Deleted Successfully');


         
    }
}
