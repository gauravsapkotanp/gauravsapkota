import Footer from "@/Components/Frontend/footer";
import Header from "@/Components/Frontend/header";
import RelatedMovies from "@/Components/Frontend/RelatedMovies";
import React from "react";

const WatchMovie = ({ movies, movie }) => {
    if (!movie) {
        return <div>Loading...</div>;
    }
    return (
        <div className="bg-[#181818] ">
            <Header />
            <div className="px-36 pb-24 pt-5 ">
                <div className="flex justify-center items-center h-[calc(100vh-100px)] group ">
                    <iframe
                        className="w-full h-full rounded-3xl shadow-2xl group-hover:shadow-sky-600 transition-all ease-in-out duration-500   "
                        typeof="text/html"
                        src={movie.link}
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
                            src={`/img/movies/${movie.thumbnail}`}
                            alt=""
                        />
                    </div>
                    <div className="flex-1 ">
                        <div>
                            <h1 className="text-yellow-500 text-4xl font-bold">
                                {movie.title}
                            </h1>
                            <p className="text-gray-500 text-lg py-5 pr-44 leading-9 tracking-wider">
                                {movie.description}
                            </p>
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Genre :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            {movie.genre}
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Actor :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            {movie.actor}
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Director :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            {movie.director}
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Country :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            {movie.country}
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Duration :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            {movie.duration}
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Quality :
                                        </h1>
                                        <h1 className="text-black font-bold text-xl bg-yellow-500 px-2 rounded-full ">
                                            {movie.quality}
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            Release :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            {movie.year}
                                        </h1>
                                    </div>
                                    <div className="flex gap-5 pb-2">
                                        <h1 className="text-white font-light text-xl">
                                            ImDb :
                                        </h1>
                                        <h1 className="text-sky-500 font-light text-xl ">
                                            {movie.imdb}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-36">
                <RelatedMovies movies={movies} genre={movie.genre} />
            </div>
            <Footer />
        </div>
    );
};

export default WatchMovie;
