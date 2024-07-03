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
                <div className="px-16 py-36 w-[82%]">
                    <div className="grid grid-cols-7 gap-10    ">
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
