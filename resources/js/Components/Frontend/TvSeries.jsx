import React from "react";
import MovieCard from "./MovieCard";

// Merge Sort Algorithm
const mergeSort = (arr, compareFn) => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle), compareFn);
    const right = mergeSort(arr.slice(middle), compareFn);

    return merge(left, right, compareFn);
};

const merge = (left, right, compareFn) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const filterMoviesByViews = (movies) => {
    // Filter movies to include only those with type "TV Series"
    const tvSeriesMovies = movies.filter((movie) => movie.type === "TV Series");

    // Comparator function for sorting by views
    const compareMoviesByViews = (a, b) => {
        // Compare movies by views in descending order
        return b.views - a.views;
    };

    // Sort the filtered movies using merge sort
    const sortedMovies = mergeSort(tvSeriesMovies, compareMoviesByViews);

    // Get the top 12 movies
    return sortedMovies.slice(0, 12);
};

const TvSeries = ({ movies }) => {
    const filteredMovies = filterMoviesByViews(movies);

    if (filteredMovies.length === 0) return null;
    return (
        <>
            <div className="w-full p-4 px-32 py-12">
                <h1 className="text-3xl text-sky-500 font-bold tracking-widest border-b-2 uppercase">
                    TV-Series
                </h1>
            </div>
            <div className="px-32">
                <div className="grid grid-cols-7 gap-10">
                    {filteredMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            description={movie.description}
                            duration={movie.duration}
                            image={"/img/movies/" + movie.thumbnail}
                            alt={movie.category}
                            imdb={movie.imdb}
                            quality={movie.quality}
                            rating={movie.rating}
                            title={movie.title}
                            type={movie.type}
                            year={movie.year}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TvSeries;
