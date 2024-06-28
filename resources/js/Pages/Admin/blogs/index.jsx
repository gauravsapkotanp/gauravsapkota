import React, {  useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import CustomDataTable from '@/Components/Auth/CustomDataTables';
import { usePage } from "@inertiajs/react";
import { Link,router } from "@inertiajs/react";
import { RiDeleteBin2Fill, RiEdit2Line } from "react-icons/ri";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationModal from '@/Components/Auth/ConfirmationModal';


const Index = ({ blogs }) => {
    const { flash } = usePage().props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBlogId, setSelectedBlogId] = useState(null);

    const columns = [
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' },
        { key: 'photopath', label: 'Image' },
        { key: 'date', label: 'Date' },
    ];
    
    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);


    const openModal = (id) => {

        setSelectedBlogId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBlogId(null);
    };

    const deleteBlog = async () => {
        router.get(`/blogs/delete/${selectedBlogId}`);
        closeModal();
    };

    const customRenderFunction = (item) => {
        return (
            <img className="w-36 mx-auto rounded-xl" src={`/img/blogs/${item.photopath}`} alt="" />
        );
    };
     
    const actions = [
        (item) => (
            <Link key="edit" href={`${route('blogs.edit', { id: item.id })}`} title="Edit">
                <div className="bg-[#1650d0] text-white w-9 h-8 flex items-center justify-center hover:bg-transparent border-2 hover:border-[#1650d0] hover:text-[#1650d0] duration-1000 rounded-md shadow-md shadow-blue-200">
                    <RiEdit2Line />
                </div>
            </Link>
        ),
        (item) => (
            <button key="delete" title="Delete" className="w-9 h-8 flex items-center justify-center rounded-md text-white bg-[#b21f31] hover:bg-transparent border-2 hover:text-[#b21f31] shadow-md shadow-red-200 hover:border-[#b21f31] duration-1000" onClick={() => openModal(item.id)}>
                <RiDeleteBin2Fill />
            </button>
        )
    ];
    

    

    return (
        <AdminLayout>
            
            <div className="pt-12 lg:pt-0 px-4 pb-36 bg-gradient-to-r from-orange-400 to-orange-500">
                <h1 className="text-lg  text-white pt-12 lg:pl-4 uppercase">Blogs</h1>
                 
                <div className="mt-6 sm:flex gap-4 justify-end">
                    <div className="mt-4">
                        <Link href={route('blogs.create')} className="bg-gray-300 uppercase text-primary hover:bg-transparent border-2 hover:border-gray-300 hover:text-gray-200 duration-1000 text-[12px] sm:text-sm font-semibold py-2 px-4 rounded-full">Add Blog</Link>
                    </div>
                </div>
            </div>
            <div className="p-4 mx-3 lg:mx-5 overflow-x-auto overflow-y-hidden bg-white rounded-xl shadow-md -mt-28">
            <CustomDataTable data={blogs} route="blogs" columns={columns}   customRenderFunction={customRenderFunction} actions={actions} />
            </div>
            <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} onConfirm={deleteBlog} message={"Are you sure to delete this blog?"}/>
        </AdminLayout>
    );
};

export default Index;
