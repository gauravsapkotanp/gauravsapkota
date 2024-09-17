import React from "react";

const FilterModal = ({ toggleModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
            <div className="bg-white p-8 rounded-lg max-w-4xl w-full shadow-xl">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Filter Options</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={toggleModal}
                    >
                        Close
                    </button>
                </div>

                <div className="mt-4">
                    {/* Sorting options */}
                    <div className="flex gap-4 mb-4">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded">
                            Latest Release
                        </button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded">
                            Recent Update
                        </button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded">
                            Most Favorite
                        </button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded">
                            Top IMDb
                        </button>
                    </div>

                    {/* Film Type */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Film Type</label>
                        <div className="flex gap-4">
                            <label>
                                <input
                                    type="radio"
                                    name="filmType"
                                    value="all"
                                />{" "}
                                All
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="filmType"
                                    value="movies"
                                />{" "}
                                Movies
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="filmType"
                                    value="tv-series"
                                />{" "}
                                TV Series
                            </label>
                        </div>
                    </div>

                    {/* Release Date */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Release</label>
                        <div className="flex gap-4">
                            <label>
                                <input
                                    type="radio"
                                    name="release"
                                    value="all"
                                />{" "}
                                All
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="release"
                                    value="2024"
                                />{" "}
                                2024
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="release"
                                    value="2023"
                                />{" "}
                                2023
                            </label>
                            {/* Add more options as needed */}
                        </div>
                    </div>

                    {/* Genre */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Genre</label>
                        <div className="flex flex-wrap gap-4">
                            <label>
                                <input type="checkbox" value="Action" /> Action
                            </label>
                            <label>
                                <input type="checkbox" value="Comedy" /> Comedy
                            </label>
                            <label>
                                <input type="checkbox" value="Horror" /> Horror
                            </label>
                            {/* Add more genres as needed */}
                        </div>
                    </div>

                    {/* Country */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Country</label>
                        <div className="flex flex-wrap gap-4">
                            <label>
                                <input type="checkbox" value="USA" /> USA
                            </label>
                            <label>
                                <input type="checkbox" value="UK" /> UK
                            </label>
                            <label>
                                <input type="checkbox" value="Canada" /> Canada
                            </label>
                            {/* Add more countries as needed */}
                        </div>
                    </div>

                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={toggleModal}
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
