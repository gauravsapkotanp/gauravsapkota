import { useState } from "react";
import { RiSearchLine, RiMenu4Fill } from "react-icons/ri";
import FilterModal from "./FilterModal";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { RiLoader4Line } from "react-icons/ri";

const Header = ({ movies }) => {
    const { post } = useForm();

    const [isModalOpen, setModalOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    //! Binary Search Algorithm
    const binarySearch = (movies, searchTerm) => {
        let left = 0;
        let right = movies.length - 1;
        const result = [];

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            const currentTitle = movies[middle].title.toLowerCase();

            if (currentTitle.startsWith(searchTerm.toLowerCase())) {
                result.push(movies[middle]);

                let i = middle - 1;
                while (
                    i >= 0 &&
                    movies[i].title
                        .toLowerCase()
                        .startsWith(searchTerm.toLowerCase())
                ) {
                    result.push(movies[i]);
                    i--;
                }

                let j = middle + 1;
                while (
                    j < movies.length &&
                    movies[j].title
                        .toLowerCase()
                        .startsWith(searchTerm.toLowerCase())
                ) {
                    result.push(movies[j]);
                    j++;
                }

                break;
            } else if (currentTitle < searchTerm.toLowerCase()) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return result;
    };

    //! Handle Search
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchText(searchTerm);
        setIsSearching(true);

        console.log("Movies List:", movies);
        console.log("Search Term:", searchTerm);

        if (searchTerm.trim() === "") {
            setFilteredMovies([]);
            setIsSearching(false);
        } else {
            setTimeout(() => {
                // Simulate search delay
                const results = movies.filter((movie) =>
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredMovies(results);
                setIsSearching(false);
            }, 500);
        }
    };
    return (
        <header className="relative z-20">
            <div className="w-full p-4 px-16">
                <div className="flex gap-10 items-center justify-between">
                    <Link href={route("home")}>
                        <div className="flex gap-5">
                            <RiMenu4Fill className="text-4xl text-white" />
                            <img
                                src="/images/logo.png"
                                className="  mx-auto w-32 "
                                alt="Logo"
                            />
                        </div>
                    </Link>
                    <div className="relative">
                        <div className="flex border-4 border-sky-600 items-center justify-between bg-black px-3 py-1.5 w-[500px] bg-opacity-60 rounded-full shadow-2xl hover:shadow-[0_0_22px_#000000] hover:bg-opacity-100 transition-all ease-in-out duration-300 delay-100">
                            {/* <button
                                onClick={toggleModal}
                                className="text-gray-300 px-4 bg-gray-700 rounded-full py-1"
                            >
                                Filter
                            </button> */}
                            <input
                                type="text"
                                placeholder="Search Movies..."
                                value={searchText}
                                onChange={handleSearch}
                                className="bg-transparent w-full text-white ring-0 focus:ring-0 border-none focus:outline-none placeholder-gray-500 placeholder:text-center"
                            />
                            {isSearching ? (
                                <RiLoader4Line className="text-3xl text-sky-500 animate-spin" />
                            ) : (
                                <RiSearchLine className="text-3xl text-sky-500" />
                            )}
                        </div>
                        {searchText && (
                            <div
                                className={`absolute p-4 rounded-b-2xl w-full backdrop-blur-3xl bg-black bg-opacity-70 ${
                                    filteredMovies.length > 5
                                        ? "max-h-[430px] overflow-y-scroll"
                                        : ""
                                }`}
                            >
                                {filteredMovies.length > 0 ? (
                                    <div className="grid grid-cols-1 gap-5">
                                        {filteredMovies.map((movie) => (
                                            <Link
                                                href={route("watchmovie.show", {
                                                    id: movie.id,
                                                })}
                                            >
                                                <div
                                                    key={movie.id}
                                                    className="flex gap-5 items-center group hover:cursor-pointer"
                                                >
                                                    <div className="h-16 w-36 object-cover rounded-xl">
                                                        <img
                                                            className="h-full w-full object-cover rounded-xl scale-100 group-hover:scale-105 transition-all ease-in-out duration-500"
                                                            src={`/img/movies/${movie.thumbnail}`}
                                                            alt={movie.title}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1 className="text-white group-hover:text-sky-500 font-bold tracking-wider text-2xl group-hover:underline transition-all ease-in-out duration-500">
                                                            {movie.title}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-white text-center">
                                        No data found
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            onClick={handleLogout}
                            className="bg-sky-500 px-6 py-3 rounded-full border-4 hover:border-4 border-white hover:bg-transparent text-white font-bold transition-all ease-in-out duration-300 delay-75"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && <FilterModal toggleModal={toggleModal} />}
        </header>
    );
};

export default Header;
