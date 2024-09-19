import { Link } from "@inertiajs/react";
import React from "react";

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

const filterTrendingMovies = (movies) => {
    // Comparator function for sorting by views, rating, and latest upload
    const compareMovies = (a, b) => {
        // First, compare by views
        if (b.views !== a.views) return b.views - a.views;
        // If views are the same, compare by rating
        if (b.rating !== a.rating) return b.rating - a.rating;
        // If both views and rating are the same, compare by upload date (latest first)
        return new Date(b.uploadDate) - new Date(a.uploadDate);
    };

    // Sort the movies using merge sort
    const sortedMovies = mergeSort(movies, compareMovies);

    // Get the top 12 movies
    return sortedMovies.slice(0, 11);
};

const TrendingMovies = ({ movies }) => {
    const filteredMovies = filterTrendingMovies(movies);

    return (
        <div className="border-l-4 px-5">
            <div className="w-full p-4 mt-12 mb-5 ">
                <h1 className="text-3xl text-sky-500 font-bold tracking-widest border-b-2 uppercase">
                    Trending
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-y-4">
                {filteredMovies.map((movie, index) => (
                    <Link
                        href={route("watchmovie.show", { id: movie.id })}
                        key={index}
                    >
                        <div className="relative">
                            <div className="w-full h-32 object-cover overflow-hidden rounded-xl">
                                <img
                                    className="w-full h-32 object-cover rounded-xl scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                                    src={`/img/movies/${movie.thumbnail}`}
                                    alt={movie.title}
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 bg-black w-full bg-opacity-50 backdrop-blur-sm p-2">
                                <h1 className="text-white text-xl font-bold">
                                    {movie.title}
                                </h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TrendingMovies;
