import AdminLayout from '@/Layouts/AdminLayout'
import { router, useForm } from '@inertiajs/react'
import React, { useState } from 'react'

const Create = () => {
    const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

    const { data, setData, processing,post } = useForm({
        title: '',
        date: '',
        description: '',
        photoPath: '',
    })

    const storeBlogs = (e) => {
        e.preventDefault();
        console.log(data);
        router.post('/blogs',data);
         
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setData('photoPath', file.name); // Set the file name to photoPath
    }

    return (
        <>
            <AdminLayout>
                <div className="pt-12 lg:pt-0 px-4 pb-36 bg-gradient-to-r from-orange-400 to-orange-500">
                    <h1 className="text-lg font-thin text-white pt-12 lg:pl-4 uppercase">Add Blogs</h1>
                </div>
                <div className="p-4 mx-3 lg:mx-5 overflow-x-auto overflow-y-hidden bg-white rounded-xl shadow-md -mt-28">
                    <form onSubmit={storeBlogs}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input type="text" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                            <input type="date" id="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={data.date} onChange={(e) => setData('date', e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea id="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={data.description} onChange={(e) => setData('description', e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoPath" className="block text-gray-700 text-sm font-bold mb-2">Photo Path</label>
                            <input type="text" id="photoPath" readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={data.photoPath} />
                        </div>
                        <div className="mb-4">
                            <input type="file" id="photo" accept="image/*" onChange={handleFileChange} className="hidden" />
                            <button type="button" onClick={() => document.getElementById('photo').click()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Choose Image</button>
                            <div className="flex items-center">
                                {selectedFile && (
                                    <span className="ml-3">{selectedFile.name}</span>
                                )}
                            </div>
                        </div>
                        <button type="submit" disabled={processing} className={`${processing ? 'opacity-50 cursor-not-allowed' : ''} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>Submit</button>
                    </form>
                </div>
            </AdminLayout>
        </>
    )
}

export default Create;
