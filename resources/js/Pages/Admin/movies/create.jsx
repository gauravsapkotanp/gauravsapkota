import InputError from "@/Components/InputError";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
    "South Africa",
    "Russia",
    "Mexico",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Switzerland",
    "Norway",
    "South Korea",
    "New Zealand",
    "Argentina",
    "Nigeria",
    "Egypt",
];
const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Documentary",
    "Fantasy",
    "Historical",
    "Horror",
    "Musical",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
    "Western",
    "War",
    "Biography",
    "Family",
    "Sports",
    "Superhero",
];
const type = ["Movie", "TV Show", "Web Series"];
const rating = ["G", "PG", "PG-13", "R", "NC-17"];
const quality = ["HD", "Full HD", "4K"];
const imdb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const language = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Arabic",
    "Russian",
    "Portuguese",
    "Italian",
    "Dutch",
    "Turkish",
];

const Create = () => {
    const { data, setData, post, errors } = useForm({
        title: "",
        year: "",
        country: "",
        genre: "",
        type: "",
        rating: "",
        actor: "",
        director: "",
        quality: "",
        imdb: "",
        duration: "",
        description: "",
        link: "",
        thumbnail: "",
        images: "",
        language: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleImagesChange = (e) => {
        const file = e.target.files[0];
        setData("images", file);
        // Update preview image
        const reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById("output").src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setData("thumbnail", file);
        // Update preview image
        const reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById("output1").src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
        post(route("movies.store"), data);
    }

    return (
        <>
            <AdminLayout>
                <div className="pt-12 lg:pt-0 px-4 pb-36 bg-gradient-to-r from-sky-400 to-sky-500">
                    <h1 className="text-lg font-bold text-white pt-12 lg:pl-4 uppercase">
                        Add movies
                    </h1>
                </div>
                <div className="p-4 mx-3 lg:mx-5 overflow-x-auto overflow-y-hidden bg-white rounded-xl shadow-md -mt-28">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md "
                                value={data.title}
                                onChange={handleChange}
                                required
                            />
                            <InputError error={errors.title} />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="link"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Link
                            </label>
                            <input
                                type="text"
                                id="link"
                                name="link"
                                className="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md "
                                value={data.link}
                                onChange={handleChange}
                                required
                            />
                            <InputError error={errors.link} />
                        </div>
                        <div className="grid grid-cols-5 gap-5">
                            <div className="mb-4">
                                <label
                                    htmlFor="year"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Year
                                </label>
                                <input
                                    type="text"
                                    id="year"
                                    name="year"
                                    className="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md "
                                    value={data.year}
                                    onChange={handleChange}
                                    required
                                />
                                <InputError error={errors.year} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={data.country}
                                    onChange={handleChange}
                                    class="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select Country
                                    </option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.country} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="genre"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Genres
                                </label>
                                <select
                                    id="genre"
                                    name="genre"
                                    value={data.genre}
                                    onChange={handleChange}
                                    class="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select genre
                                    </option>
                                    {genres.map((genre) => (
                                        <option key={genre} value={genre}>
                                            {genre}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.genre} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="type"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Type
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    value={data.type}
                                    onChange={handleChange}
                                    class="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select type
                                    </option>
                                    {type.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.type} />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="rating"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Rating
                                </label>
                                <select
                                    id="rating"
                                    name="rating"
                                    value={data.rating}
                                    onChange={handleChange}
                                    class="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select Rating
                                    </option>
                                    {rating.map((rating) => (
                                        <option key={rating} value={rating}>
                                            {rating}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.rating} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="quality"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Quality
                                </label>
                                <select
                                    id="quality"
                                    name="quality"
                                    value={data.quality}
                                    onChange={handleChange}
                                    class="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select Quality
                                    </option>
                                    {quality.map((quality) => (
                                        <option key={quality} value={quality}>
                                            {quality}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.quality} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="imdb"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    IMDB Ratings
                                </label>
                                <select
                                    id="imdb"
                                    name="imdb"
                                    value={data.imdb}
                                    onChange={handleChange}
                                    class="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select Quality
                                    </option>
                                    {imdb.map((imdb) => (
                                        <option key={imdb} value={imdb}>
                                            {imdb}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.imdb} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="duration"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Duration
                                </label>
                                <input
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    className="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md "
                                    value={data.duration}
                                    onChange={handleChange}
                                    required
                                />
                                <InputError error={errors.duration} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="language"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Language
                                </label>
                                <select
                                    id="language"
                                    name="language"
                                    value={data.language}
                                    onChange={handleChange}
                                    class="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select Quality
                                    </option>
                                    {language.map((language) => (
                                        <option key={language} value={language}>
                                            {language}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.language} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="mb-4">
                                <label
                                    htmlFor="actor"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Actor
                                </label>
                                <input
                                    type="text"
                                    id="actor"
                                    name="actor"
                                    className="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md "
                                    value={data.actor}
                                    onChange={handleChange}
                                    required
                                />
                                <InputError error={errors.actor} />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="director"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Director
                                </label>
                                <input
                                    type="text"
                                    id="director"
                                    name="director"
                                    className="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md "
                                    value={data.director}
                                    onChange={handleChange}
                                    required
                                />
                                <InputError error={errors.director} />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="focus:ring-0 border-0 bg-gray-200 mt-2 placeholder:text-sm   block w-full py-2 rounded-md "
                                value={data.description}
                                onChange={handleChange}
                                required
                            />
                            <InputError error={errors.description} />
                        </div>
                        <div className="grid grid-cols-2 gap-10 justify-items-center">
                            <div>
                                <div className="sm:col-span-2">
                                    <p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name="images"
                                            id="images"
                                            onChange={handleImagesChange}
                                            style={{ display: "none" }}
                                        />
                                    </p>
                                    <p className="bg-primary text-white hover:bg-transparent border-2 hover:border-primary duration-1000 hover:text-primary py-2 px-4 float-left rounded-lg cursor-pointer">
                                        <label
                                            htmlFor="images"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Choose Image
                                        </label>
                                    </p>
                                    <p className="pt-16">
                                        <img
                                            id="output"
                                            width="300"
                                            alt="Preview"
                                        />
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="sm:col-span-2">
                                    <p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name="thumbnail"
                                            id="thumbnail"
                                            onChange={handleThumbnailChange}
                                            style={{ display: "none" }}
                                        />
                                    </p>
                                    <p className="bg-primary text-white hover:bg-transparent border-2 hover:border-primary duration-1000 hover:text-primary py-2 px-4 float-left rounded-lg cursor-pointer">
                                        <label
                                            htmlFor="thumbnail"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Choose Thumbnail
                                        </label>
                                    </p>
                                    <p className="pt-16">
                                        <img
                                            id="output1"
                                            width="300"
                                            alt="Preview"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
};

export default Create;
