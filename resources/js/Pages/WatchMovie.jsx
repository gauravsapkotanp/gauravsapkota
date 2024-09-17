import Footer from "@/Components/Frontend/footer";
import Header from "@/Components/Frontend/header";
import RelatedMovies from "@/Components/Frontend/RelatedMovies";
import React from "react";

const WatchMovie = ({ movies }) => {
    return (
        <div className="bg-[#181818] ">
            <Header />
            <div className="px-36 pb-24 pt-5 ">
                <div className="flex justify-center items-center h-[calc(100vh-100px)] group ">
                    <iframe
                        className="w-full h-full rounded-3xl shadow-2xl group-hover:shadow-sky-600 transition-all ease-in-out duration-500   "
                        typeof="text/html"
                        src="https://www.youtube.com/embed/1cX4t5-YpHQ"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="px-36 py-8 bg-black">
                <div className="flex items-center justify-center gap-10">
                    <div className="col-span-1">
                        <img
                            className="w-64 h-full rounded-3xl shadow-2xl"
                            src="/img/movies/antmanandthewaspquantumania_lob_crd_03_1726560329.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex-1 ">
                        <div>
                            <h1 className="text-yellow-500 text-4xl font-bold">
                                Alien: Romulus
                            </h1>
                            <p className="text-gray-500 text-lg py-5 pr-44 leading-9 tracking-wider">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Recusandae minus soluta
                                veritatis reprehenderit et ad necessitatibus
                                dolor expedita omnis? Nihil ex facilis sunt
                                minus eligendi quidem nesciunt vitae cupiditate
                                officiis.
                            </p>
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Genre :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            Horror
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Actor :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            Gaurav Sapkota
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Director :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            Roshan Khanal
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Country :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            Spain
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Duration :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            199 min
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Quality :
                                        </h1>
                                        <h1 className="text-black font-bold text-xl bg-yellow-500 px-2 rounded-full ">
                                            CAM
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Release :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            2024
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            ImDb :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            75
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-36">
                <RelatedMovies movies={movies} />
            </div>
            <Footer />
        </div>
    );
};

export default WatchMovie;
