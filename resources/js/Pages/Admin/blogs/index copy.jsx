import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { RiDeleteBin2Fill, RiEdit2Line } from "react-icons/ri";
import DataTable from 'react-data-table-component';
import {Link, router, usePage} from "@inertiajs/react";


export default function Index({ blogs  }) {
    const {flash} = usePage().props;
    console.log(flash.message);
    const deleteBlog = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            router.get(`/blogs/delete/${id}`);
        }
    };

    const columns = [
        {
            name: 'S.N.',
            selector: Index => Index.id,
            sortable: true,
        },
        {
            name: 'Date',
            selector: blogs => blogs.date,
            sortable: true,

        },
        {
            name: 'Photopath',
            cell: row => <img className="w-36 mx-auto" src={`/img/blogs/${row.photopath}`} alt=""/>

        },
        {
            name: 'Title',
            selector: blogs => blogs.title,
            sortable: true,

        },
        {
            name: 'Description',
            selector: blogs => blogs.description,
            sortable: true,

        },
        {
            name: 'Action',
            cell: row => (
                <div className="flex items-center justify-center gap-1">
                    <Link  href={route('blogs.edit', row.id)} title="Edit">
                        <div className="bg-[#1650d0] text-white w-9 h-8 flex items-center justify-center hover:bg-transparent border-2 hover:border-[#1650d0] hover:text-[#1650d0] duration-1000  rounded-md shadow-md shadow-blue-200 ">
                            <RiEdit2Line />
                        </div>
                    </Link>
                    <button title="Delete" className="w-9 h-8 flex items-center justify-center rounded-md  text-white bg-[#b21f31] hover:bg-transparent border-2  hover:text-[#b21f31] shadow-md shadow-red-200 hover:border-[#b21f31] duration-1000 " onClick={() => deleteBlog(row.id)}>
                        <RiDeleteBin2Fill />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <AdminLayout>

        

            <div className="pt-12 lg:pt-0 px-4 pb-36 bg-gradient-to-r from-orange-400 to-orange-500">
                <h1 className="text-lg font-thin text-white pt-12 lg:pl-4 uppercase">Blogs</h1>
                {flash.message && (
          <div class="alert">{flash.message}</div>
        )}
                <div className="mt-6 sm:flex gap-4 justify-end">
                    <div className="mt-4">
                    < Link href={route('blogs.create')} className="bg-gray-300 uppercase text-primary hover:bg-transparent border-2 hover:border-gray-300 hover:text-gray-200 duration-1000 text-[12px] sm:text-sm font-semibold py-2 px-4 rounded-full">Add Blog</Link>
                     
                    
                    </div>
                </div>
            </div>
            <div className="p-4 mx-3 lg:mx-5 overflow-x-auto overflow-y-hidden bg-white rounded-xl shadow-md -mt-28">
                <DataTable
                    columns={columns}
                    data={blogs}
                    pagination
                    highlightOnHover

                />
            </div>
        </AdminLayout>
    );
}
