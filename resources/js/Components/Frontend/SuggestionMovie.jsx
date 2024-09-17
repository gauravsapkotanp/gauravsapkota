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

const filterMovies = (movies) => {
    // Comparator function for sorting by ratings and views
    const compareMovies = (a, b) => {
        // Compare first by rating
        if (b.rating !== a.rating) return b.rating - a.rating;
        // If ratings are the same, compare by views
        return b.views - a.views;
    };

    // Sort the movies using merge sort
    const sortedMovies = mergeSort(movies, compareMovies);

    // Get the top 12 movies
    return sortedMovies.slice(0, 12);
};

const SuggestionMovie = ({ movies }) => {
    const filteredMovies = filterMovies(movies);

    return (
        <>
            <div className="w-full p-4   py-12">
                <h1 className="text-3xl text-sky-500 font-bold tracking-widest border-b-2 uppercase">
                    Suggestions
                </h1>
            </div>
            <div className="    ">
                <div className="grid grid-cols-6 gap-10    ">
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

export default SuggestionMovie;
