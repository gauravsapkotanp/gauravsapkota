import React, { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";
import { RiDeleteBin2Fill, RiEdit2Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "@/Components/Auth/ConfirmationModal";
import { route } from "ziggy-js";
import UserDataTable from "./UserDataTable";

const Index = ({ users }) => {
    const { flash } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const columns = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" },
        {
            key: "days",
            label: "Remaining Days",
            render: (item) =>
                item.days != null ? (
                    <span className="bg-green-800 px-5 py-1 rounded-full text-white font-bold">
                        {item.days} Days Remaining
                    </span>
                ) : (
                    <span className="bg-red-800 px-5 py-1 rounded-full text-white font-bold">
                        Not Subscribed
                    </span>
                ),
        },
        {
            key: "status",
            label: "Status",
            render: (item) =>
                item.status == "active" ? (
                    <span className="bg-green-500 px-5 py-1 rounded-full text-white font-bold">
                        Active
                    </span>
                ) : (
                    <span className="bg-red-500 px-5 py-1 rounded-full text-white font-bold">
                        Inactive
                    </span>
                ),
        },
    ];

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);

    const openModal = (id) => {
        setSelectedMovieId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovieId(null);
    };

    const deleteMovie = async () => {
        router.get(`/users/delete/${selectedMovieId}`);
        closeModal();
    };

    const actions = [
        // (item) => (
        //     <Link key="edit" href="" title="Edit">
        //         <div className="bg-[#1650d0] text-white w-9 h-8 flex items-center justify-center hover:bg-transparent border-2 hover:border-[#1650d0] hover:text-[#1650d0] duration-1000 rounded-md shadow-md shadow-blue-200">
        //             <RiEdit2Line />
        //         </div>
        //     </Link>
        // ),
        // (item) => (
        //     <button
        //         key="delete"
        //         title="Delete"
        //         className="w-9 h-8 flex items-center justify-center rounded-md text-white bg-[#b21f31] hover:bg-transparent border-2 hover:text-[#b21f31] shadow-md shadow-red-200 hover:border-[#b21f31] duration-1000"
        //         onClick={() => openModal(item.id)}
        //     >
        //         <RiDeleteBin2Fill />
        //     </button>
        // ),
    ];

    return (
        <AdminLayout>
            <div className="pt-12 lg:pt-0 px-4 pb-36 bg-gradient-to-r from-sky-400 to-sky-500">
                <h1 className="text-2xl font-bold tracking-widest text-white pt-12 lg:pl-4 uppercase">
                    users
                </h1>
            </div>
            <div className="p-4 mx-3 lg:mx-5 overflow-x-auto overflow-y-hidden bg-white rounded-xl shadow-md -mt-28">
                <UserDataTable
                    data={users}
                    route="users"
                    columns={columns}
                    actions={actions}
                />
            </div>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={deleteMovie}
                message={"Are you sure to delete this user?"}
            />
        </AdminLayout>
    );
};

export default Index;
