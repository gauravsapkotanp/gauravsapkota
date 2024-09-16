import BodyComponent from "@/Components/Frontend/BodyComponent";
import MovieCard from "@/Components/Frontend/MovieCard";
import NavSwiper from "@/Components/Frontend/NavSwiper";
import TrendingSwiper from "@/Components/Frontend/TrendingSwiper";
import Header from "@/Components/Frontend/header";
import React from "react";

export default function Welcome({ children }) {
    return (
        <>
            <div className="bg-[#181818] ">
                <Header />
                <div className="-mt-24">
                    <TrendingSwiper />
                </div>
                <div className="w-full p-4 px-32 py-12">
                    <h1 className="text-3xl text-sky-500 font-bold tracking-widest border-b-2">
                        Suggestions
                    </h1>
                </div>
                <div className="px-32   ">
                    <div className="grid grid-cols-7 gap-10    ">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </div>
                <div className="w-full p-4 px-32 py-12 ">
                    <h1 className="text-3xl text-sky-500 font-bold tracking-widest border-b-2">
                        Popular Shows
                    </h1>
                </div>
                <div className="px-32   ">
                    <div className="grid grid-cols-7 gap-10    ">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </div>
                <div className="w-full p-4 px-32 py-12 ">
                    <h1 className="text-3xl text-sky-500 font-bold tracking-widest border-b-2">
                        TV-Series
                    </h1>
                </div>
                <div className="px-32   ">
                    <div className="grid grid-cols-7 gap-10    ">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}
