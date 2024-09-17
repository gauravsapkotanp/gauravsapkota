import { useState } from "react";
import { RiSearchLine, RiMenu4Fill } from "react-icons/ri";
import FilterModal from "./FilterModal";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <header className="relative z-20  ">
            <div className="w-full p-4 px-16">
                <div className="flex gap-10 items-center justify-between">
                    <div className="flex gap-5">
                        <RiMenu4Fill className="text-4xl text-white" />
                        <img
                            src="/images/logo.png"
                            className="  mx-auto w-32 "
                            alt="Logo"
                        />
                    </div>
                    <div className="flex items-center justify-between bg-black px-3 py-1.5 w-[500px] bg-opacity-60 rounded-full shadow-2xl hover:shadow-[0_0_22px_#000000] hover:bg-opacity-100 transition-all ease-in-out duration-300 delay-100">
                        <button
                            onClick={toggleModal}
                            className="text-gray-300 px-4 bg-gray-700 rounded-full py-1"
                        >
                            Filter
                        </button>
                        <input
                            type="text"
                            placeholder="Search Movies..."
                            className="bg-transparent w-full text-white ring-0 focus:ring-0 border-none focus:outline-none placeholder-gray-500 placeholder:text-center"
                        />
                        <RiSearchLine className="text-3xl text-sky-500" />
                    </div>
                    {/* <ul className="flex items-center gap-10">
                        <li className="text-white text-xl hover:text-sky-500 transition-all ease-in-out duration-500 hover:cursor-pointer">
                            Home
                        </li>
                        <li className="text-white text-xl hover:text-sky-500 transition-all ease-in-out duration-500 hover:cursor-pointer">
                            Genre
                        </li>
                        <li className="text-white text-xl hover:text-sky-500 transition-all ease-in-out duration-500 hover:cursor-pointer">
                            Country
                        </li>
                        <li className="text-white text-xl hover:text-sky-500 transition-all ease-in-out duration-500 hover:cursor-pointer">
                            Movies
                        </li>
                        <li className="text-white text-xl hover:text-sky-500 transition-all ease-in-out duration-500 hover:cursor-pointer">
                            TV-Series
                        </li>
                    </ul> */}
                    <div></div>
                </div>
            </div>

            {isModalOpen && <FilterModal toggleModal={toggleModal} />}
        </header>
    );
};

export default Header;
