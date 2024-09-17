import React, { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import CustomDataTable from "@/Components/Auth/CustomDataTables";
import { usePage } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";
import { RiDeleteBin2Fill, RiEdit2Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "@/Components/Auth/ConfirmationModal";
import { route } from "ziggy-js";
import MoviesDataTable from "./MoviesDataTable";
import { FaLink } from "react-icons/fa";

const Index = ({ movies }) => {
    const { flash } = usePage().props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const columns = [
        { key: "title", label: "Title" },
        { key: "year", label: "Year" },
        { key: "country", label: "Country" },
        { key: "genre", label: "Genre" },
        { key: "type", label: "type" },
        { key: "views", label: "Views" },
        { key: "rating", label: "Rating" },
        { key: "actor", label: "Actor" },
        { key: "director", label: "Director" },
        { key: "quality", label: "Quality" },
        { key: "imdb", label: "IMDB" },
        { key: "duration", label: "Duration" },
        { key: "description", label: "Description" },
        {
            key: "link",
            label: "Link",
            render: (item) =>
                item.link ? (
                    <a href={item.link} target="_blank">
                        <div className="bg-sky-500 hover:bg-sky-400 text-white h-12 w-12 flex items-center justify-center rounded-full">
                            <FaLink className="text-xl" />
                        </div>
                    </a>
                ) : null,
        },
        {
            key: "thumbnail",
            label: "Thumbnail",
            render: (item) =>
                item.thumbnail ? (
                    <img
                        className="w-36 rounded-xl mx-auto"
                        src={`/img/movies/${item.thumbnail}`}
                        alt="User"
                    />
                ) : null,
        },
        {
            key: "images",
            label: "Cover Image",
            render: (item) =>
                item.images ? (
                    <img
                        className="w-36 rounded-xl mx-auto"
                        src={`/img/movies/${item.images}`}
                        alt="Company"
                    />
                ) : null,
        },
        { key: "language", label: "Language" },
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
        router.get(`/movies/delete/${selectedMovieId}`);
        closeModal();
    };

    const customRenderFunction = (item) => {
        return (
            <img
                className="w-36 mx-auto rounded-xl"
                src={`/img/movies/${item.photopath}`}
                alt=""
            />
        );
    };

    const actions = [
        (item) => (
            <Link
                key="edit"
                href={`${route("movies.edit", { id: item.id })}`}
                title="Edit"
            >
                <div className="bg-[#1650d0] text-white w-9 h-8 flex items-center justify-center hover:bg-transparent border-2 hover:border-[#1650d0] hover:text-[#1650d0] duration-1000 rounded-md shadow-md shadow-blue-200">
                    <RiEdit2Line />
                </div>
            </Link>
        ),
        (item) => (
            <button
                key="delete"
                title="Delete"
                className="w-9 h-8 flex items-center justify-center rounded-md text-white bg-[#b21f31] hover:bg-transparent border-2 hover:text-[#b21f31] shadow-md shadow-red-200 hover:border-[#b21f31] duration-1000"
                onClick={() => openModal(item.id)}
            >
                <RiDeleteBin2Fill />
            </button>
        ),
    ];

    return (
        <AdminLayout>
            <div className="pt-12 lg:pt-0 px-4 pb-36 bg-gradient-to-r from-sky-400 to-sky-500">
                <h1 className="text-2xl font-bold tracking-widest text-white pt-12 lg:pl-4 uppercase">
                    movies
                </h1>

                <div className="mt-6 sm:flex gap-4 justify-end">
                    <div className="mt-4">
                        <Link
                            href={route("movies.create")}
                            className="bg-gray-300 uppercase text-primary hover:bg-transparent border-2 hover:border-gray-300 hover:text-gray-200 duration-1000 text-[12px] sm:text-sm font-semibold py-2 px-4 rounded-full"
                        >
                            Add Movies
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4 mx-3 lg:mx-5 overflow-x-auto overflow-y-hidden bg-white rounded-xl shadow-md -mt-28">
                <MoviesDataTable
                    data={movies}
                    route="movies"
                    columns={columns}
                    actions={actions}
                />
            </div>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={deleteMovie}
                message={"Are you sure to delete this movie?"}
            />
        </AdminLayout>
    );
};

export default Index;
