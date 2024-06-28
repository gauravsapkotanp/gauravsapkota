 
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { RiDeleteBin2Fill, RiEdit2Line } from "react-icons/ri";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { Link, router, usePage } from "@inertiajs/react";
import ReactPaginate from 'react-paginate';
import { utils, writeFile } from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function Index({ blogs }) {
    const { flash } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);  
    const [showingEntriesText, setShowingEntriesText] = useState('');

    const deleteBlog = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            router.get(`/blogs/delete/${id}`);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(0); // Reset to first page when items per page changes
    };

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.date.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageCount = Math.ceil(filteredBlogs.length / itemsPerPage);

    const displayedBlogs = filteredBlogs.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const exportToExcel = () => {
        const worksheet = utils.json_to_sheet(filteredBlogs);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Blogs");
        writeFile(workbook, "blogs.xlsx");
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [['S.N.', 'Title', 'Description', 'Photopath', 'Date']],
            body: filteredBlogs.map((blog, index) => [
                index + 1 + currentPage * itemsPerPage,
                blog.title,
                blog.description,
                blog.photopath,
                blog.date,
            ]),
        });
        doc.save('blogs.pdf');
    };

    useEffect(() => {
        const startEntry = currentPage * itemsPerPage + 1;
        const endEntry = Math.min((currentPage + 1) * itemsPerPage, filteredBlogs.length);
        const totalEntries = filteredBlogs.length;
        setShowingEntriesText(`Showing ${startEntry} to ${endEntry} of ${totalEntries} entries`);
    }, [currentPage, itemsPerPage, filteredBlogs]); // Dependency array for useEffect

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
                <div className="overflow-auto border-2 rounded-xl border-gray-300">
                    <div className="flex justify-between items-center ">
                        <div className="flex gap-2">
                            <div className="relative p-2">
                                <span className='text-black px-2'>Show </span>
                                <select
                                    value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="appearance-none text-black   bg-white border border-gray-300 hover:border-gray-500   rounded-md text-sm leading-tight focus:outline-none focus:ring"
                                >
                                    {[10, 20, 30, 40].map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                
                                <span className='text-black px-2'>Entries </span>
                            </div>
                            <button onClick={exportToExcel} className="m-2 p-2 bg-white text-green-700 border-2 border-green-700 hover:border-green-500 hover:text-green-500 rounded-lg"><SiMicrosoftexcel className='text-xl' /></button>
                            <button onClick={exportToPDF} className="m-2 p-2 bg-white text-red-700 border-2 border-red-700 hover:border-red-500 hover:text-red-500 rounded-lg"><FaFilePdf className='text-xl' />
                            </button>
                        </div>
                        <div>
                        <span className='text-black '>Search : </span>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="mr-2 pr-2 border rounded-lg w-52 text-black"
                             
                        />
                        </div>
                    </div>
                    <table className="w-full text-center whitespace-nowrap overflow-auto ">
                        <thead>
                            <tr>
                                <td className="font-bold py-2 border-r border-b border-t border-gray-300 px-2 text-black">S.N.</td>
                                <td className="font-extrabold py-2 border-r border-b border-t border-gray-300 px-2 text-black">Title</td>
                                <td className="font-extrabold py-2 border-r border-b border-t border-gray-300 px-2 text-black">Description</td>
                                <td className="font-extrabold py-2 border-r border-b border-t border-gray-300 px-2 text-black">Photopath</td>
                                <td className="font-extrabold py-2 border-r border-b border-t border-gray-300 px-2 text-black">Date</td>
                                <td className="font-extrabold py-2 border-b border-t border-gray-300 px-2 text-black">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedBlogs.map((blog, index) => (
                                <tr key={blog.id} className="rounded-bl-xl">
                                    <td className="py-2 border-r border-t border-b border-gray-300 rounded-l-xl px-2 text-black">{index + 1 + currentPage * itemsPerPage}</td>
                                    <td className="py-2 border-r border-t border-b border-gray-300 px-2 text-black">{blog.title}</td>
                                    <td className="py-2 border-r border-t border-b border-gray-300 px-2 text-black">{blog.description}</td>
                                    <td className="py-2 border-r border-t border-b border-gray-300 px-2 text-black">
                                        <img className="w-36 mx-auto rounded-xl" src={`/img/blogs/${blog.photopath}`} alt="" />
                                    </td>
                                    <td className="py-2 border-r border-t border-b border-gray-300 px-2 text-black">{blog.date}</td>
                                    <td className="py-2 border-t border-b border-gray-300 px-2 text-black">
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
                    <div className='flex items-center justify-between'>
                    <div className="text-center mt-2 mb-4 text-gray-600 text-sm pl-5">
                        {showingEntriesText}
                    </div>
                    <ReactPaginate
                    previousLabel={<span className="text-gray-400 bg-gray-200 p-2  rounded-lg">Previous</span>}
                    nextLabel={<span className="text-gray-400 bg-gray-200 p-2 rounded-lg">Next</span>}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination flex justify-center"}
                    pageClassName={"  px-4 py-2 border border-gray-300 rounded-md text-black cursor-pointer hover:bg-gray-200 hover:text-black"}
                    activeClassName={"bg-blue-500 text-white"}
                    className="flex gap-2 items-center justify-end p-2"
/>
                    </div>
                   
                </div>
            </div>
        </AdminLayout>
    );
}
