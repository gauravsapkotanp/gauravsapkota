import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { RiDeleteBin2Fill, RiEdit2Line } from "react-icons/ri";
import { Link, router, usePage } from "@inertiajs/react";

export default function Index({ blogs }) {
    const { flash } = usePage().props;

    const deleteBlog = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            router.get(`/blogs/delete/${id}`);
        }
    };

    return (
        <AdminLayout>
            <div className="pt-12 lg:pt-0 px-4 pb-36 bg-gradient-to-r from-orange-400 to-orange-500">
                <h1 className="text-lg font-thin text-white pt-12 lg:pl-4 uppercase">Blogs</h1>
                {flash.message && (
                    <div className="alert">{flash.message}</div>
                )}
                <div className="mt-6 sm:flex gap-4 justify-end">
                    <div className="mt-4">
                        <Link href={route('blogs.create')} className="bg-gray-300 uppercase text-primary hover:bg-transparent border-2 hover:border-gray-300 hover:text-gray-200 duration-1000 text-[12px] sm:text-sm font-semibold py-2 px-4 rounded-full">Add Blog</Link>
                    </div>
                </div>
            </div>
            <div className="p-4 mx-3 lg:mx-5 overflow-x-auto overflow-y-hidden bg-white rounded-xl shadow-md -mt-28">
                <div className="overflow-auto  border-2 border-red-500 rounded-xl ">
                    <table className="w-full text-center whitespace-nowrap overflow-auto mt-4 ">
                        <thead>
                            <tr className="  ">
                                <td className="font-bold py-2 border-l border-b    px-2 text-black">
                                    S.N.
                                </td>
                                <td className="font-extrabold py-2 border border-gray-300 px-2 text-black">
                                    Title
                                </td>
                                <td className="font-extrabold py-2 border border-gray-300 px-2 text-black">
                                    Description
                                </td>
                                <td className="font-extrabold py-2 border border-gray-300 px-2 text-black">
                                    Photopath
                                </td>
                                <td className="font-extrabold py-2 border border-gray-300 px-2 text-black">
                                    Date
                                </td>
                                
                                <td className="font-extrabold py-2 border border-gray-300 px-2 text-black">
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog, index) => (
                                <tr key={blog.id} className="border border-gray-300">
                                    <td className="py-2 border border-gray-300 px-2 text-black">
                                        {index + 1}
                                    </td>
                                    <td className="py-2 border border-gray-300 px-2 text-black">
                                        {blog.title}
                                    </td>
                                    <td className="py-2 border border-gray-300 px-2 text-black">
                                        {blog.description}
                                    </td>
                                    <td className="py-2 border border-gray-300 px-2 text-black">
                                    <img className="w-36 mx-auto rounded-xl" src={`/img/blogs/${blog.photopath}`} alt=""/>
                                        
                                    </td>
                                    <td className="py-2 border border-gray-300 px-2 text-black">
                                        {blog.date}
                                    </td>
                                     
                                    <td className="py-2 border border-gray-300 px-2 text-black">
                                        <div className="flex items-center justify-center gap-1">
                                            <Link href={route('blogs.edit', blog.id)} title="Edit">
                                                <div className="bg-[#1650d0] text-white w-9 h-8 flex items-center justify-center hover:bg-transparent border-2 hover:border-[#1650d0] hover:text-[#1650d0] duration-1000 rounded-md shadow-md shadow-blue-200">
                                                    <RiEdit2Line />
                                                </div>
                                            </Link>
                                            <button title="Delete" className="w-9 h-8 flex items-center justify-center rounded-md text-white bg-[#b21f31] hover:bg-transparent border-2 hover:text-[#b21f31] shadow-md shadow-red-200 hover:border-[#b21f31] duration-1000" onClick={() => deleteBlog(blog.id)}>
                                                <RiDeleteBin2Fill />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
