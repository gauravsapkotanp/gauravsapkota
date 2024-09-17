import BodyComponent from "@/Components/Frontend/BodyComponent";
import MovieCard from "@/Components/Frontend/MovieCard";
import NavSwiper from "@/Components/Frontend/NavSwiper";
import PopularMovie from "@/Components/Frontend/PopularMovie";
import SuggestionMovie from "@/Components/Frontend/SuggestionMovie";
import TrendingMovies from "@/Components/Frontend/TrendingMovies";
import TrendingSwiper from "@/Components/Frontend/TrendingSwiper";
import TvSeries from "@/Components/Frontend/TvSeries";
import WebSeries from "@/Components/Frontend/WebSeries";
import Footer from "@/Components/Frontend/footer";
import Header from "@/Components/Frontend/header";
import React from "react";

export default function Welcome({ movies }) {
    return (
        <>
            <div className="bg-[#181818] ">
                <Header />
                <div className="-mt-24">
                    <NavSwiper movies={movies} />
                </div>
                <div className="grid grid-cols-5 gap-10  px-32 ">
                    <div className="col-span-4 ">
                        <SuggestionMovie movies={movies} />
                        <PopularMovie movies={movies} />
                    </div>
                    <div>
                        <TrendingMovies movies={movies} />
                    </div>
                </div>
                <TvSeries movies={movies} />
                <WebSeries movies={movies} />
                <Footer />
            </div>
        </>
    );
}
