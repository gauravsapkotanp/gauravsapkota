import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation"; // Import navigation CSS
import { RiStarFill, RiPlayCircleFill, RiBookmarkFill } from "react-icons/ri";
import { Scrollbar, Navigation } from "swiper/modules";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import "../../../css/navswiper.css";

const NavSwiper = () => {
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
            {[
                "/images/swiper1.jpg",
                "/images/img1.jpg",
                "/images/img2.jpg",
                "/images/img3.jpg",
                "/images/img4.jpg",
                "/images/img5.jpg",
                "/images/img6.jpg",
                "/images/swiper1.jpg",
            ].map((src, index) => (
                <SwiperSlide key={index} className="relative">
                    <img
                        className=" h-screen w-full object-cover"
                        src={src}
                        alt=""
                    />
                    <div className="">
                        <div className="absolute inset-0 flex items-end mb-[250px] px-16">
                            <div className="relative z-40">
                                <h1 className="uppercase text-4xl font-bold text-white tracking-wider">
                                    The Infallibles
                                </h1>
                                <div className="mt-2 flex items-center gap-4">
                                    <span className="bg-sky-600 text-xs text-black font-bold uppercase px-2 py-1 rounded-full  ">
                                        HD
                                    </span>
                                    <span className="border-2 border-gray-300 text-xs text-gray-300 font-bold uppercase px-1 rounded-full  ">
                                        PG
                                    </span>
                                    <div className="flex gap-1 items-center">
                                        <RiStarFill className="text-gray-300" />
                                        <span className="text-gray-300">0</span>
                                    </div>
                                    <span className="text-gray-300">2024</span>
                                    <span className="text-gray-300">
                                        99 min
                                    </span>
                                    <span className="text-gray-300">Drama</span>
                                    <span className="text-gray-300">
                                        Thriller
                                    </span>
                                    <span className="text-gray-300">Crime</span>
                                </div>
                                <div className="mt-2 max-w-[48rem] line-clamp-2">
                                    <p className="text-gray-500 tracking-wider">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Mollitia fugiat
                                        consequatur voluptas incidunt quam!
                                        Omnis commodi eius nulla tempore sed
                                        temporibus iste, doloremque non,
                                        laudantium asperiores aspernatur tenetur
                                        nesciunt autem?
                                    </p>
                                </div>
                                <div className="flex gap-10 mt-6">
                                    <button className="bg-sky-600 hover:bg-sky-700 text-black px-4 py-3 rounded-full mt-4 flex gap-2 items-center transition-all ease-in-out duration-300 delay-100">
                                        <RiPlayCircleFill className="text-2xl" />
                                        Watch Now
                                    </button>

                                    <div>
                                        <button className=" text-white px-4 py-2 group rounded-md mt-4 flex items-center text-xl hover:text-sky-600 gap-2 transition-all ease-in-out duration-300 delay-100">
                                            <RiBookmarkFill className="text-2xl" />
                                            Bookmark
                                        </button>
                                    </div>
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
