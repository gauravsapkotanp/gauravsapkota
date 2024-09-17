import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation"; // Import navigation CSS
import { RiStarFill, RiPlayCircleFill, RiBookmarkFill } from "react-icons/ri";
import { Scrollbar, Navigation } from "swiper/modules";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import "../../../css/navswiper.css";
import { Link } from "@inertiajs/react";

const NavSwiper = ({ movies }) => {
    // Initialize Swiper navigation ref
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <Swiper
            scrollbar={{
                hide: false,
                enabled: true,
            }}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            modules={[Scrollbar, Navigation]}
            className="mySwiper relative "
        >
            {movies.map((movie, index) => (
                <SwiperSlide key={index} className="relative">
                    <img
                        className=" h-screen w-full object-cover"
                        src={`/img/movies/${movie.thumbnail}`}
                        alt=""
                    />
                    <div className="">
                        <div className="absolute inset-0 flex items-end mb-[100px] px-16">
                            <div className="relative z-40">
                                <h1 className="uppercase text-4xl font-bold text-white tracking-wider">
                                    {movie.title}
                                </h1>
                                <div className="mt-2 flex items-center gap-4">
                                    <span className="bg-sky-600 text-xs text-black font-bold uppercase px-2 py-1 rounded-full  ">
                                        {movie.quality}
                                    </span>
                                    <span className="border-2 border-gray-300 text-xs text-gray-300 font-bold uppercase px-1 rounded-full  ">
                                        {movie.rating}
                                    </span>
                                    <div className="flex gap-1 items-center">
                                        <RiStarFill className="text-gray-300" />
                                        <span className="text-gray-300">
                                            {movie.imdb}
                                        </span>
                                    </div>
                                    <span className="text-gray-300">
                                        {movie.year}
                                    </span>
                                    <span className="text-gray-300">
                                        {movie.duration}
                                    </span>
                                    <span className="text-gray-300">
                                        {movie.genre}
                                    </span>
                                </div>
                                <div className="mt-2 max-w-[48rem] line-clamp-2">
                                    <p className="text-gray-500 tracking-wider">
                                        {movie.description}
                                    </p>
                                </div>
                                <div className="flex gap-10 mt-6">
                                    <a href={movie.link} target="_blank">
                                        <button className="bg-sky-600 hover:bg-sky-700 text-black px-4 py-3 rounded-full mt-4 flex gap-2 items-center transition-all ease-in-out duration-300 delay-100">
                                            <RiPlayCircleFill className="text-2xl" />
                                            Watch Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-overlay-swiper"></div>
                </SwiperSlide>
            ))}

            <div
                ref={navigationPrevRef}
                className="mx-16  z-10 hover:bg-sky-600 bg-gray-600 text-white   right-16 top-1/2 transform translate-y-48 rounded-xl w-10 h-10 flex items-center justify-center absolute cursor-pointer"
            >
                <MdOutlineArrowLeft className="text-5xl text-white" />
            </div>
            <div
                ref={navigationNextRef}
                className="mx-16   z-10 hover:bg-sky-600 bg-gray-600 text-white   right-4 top-1/2 transform translate-y-48 rounded-xl w-10 h-10 flex items-center justify-center absolute cursor-pointer"
            >
                <MdOutlineArrowRight className="text-5xl text-white" />
            </div>
        </Swiper>
    );
};

export default NavSwiper;
