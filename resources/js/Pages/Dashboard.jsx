import AdminLayout from "@/Layouts/AdminLayout";
import {
    FaBloggerB,
    FaStoreAlt,
    FaRegEye,
    FaTasks,
    FaRocketchat,
} from "react-icons/fa";

// Helper function to count movies by type
const countMoviesByType = (movies, type) => {
    return movies.filter((movie) => movie.type === type).length;
};

export default function Dashboard({ movies }) {
    // Count movies by type
    const totalMovies = countMoviesByType(movies, "Movie");
    const totalWebSeries = countMoviesByType(movies, "Web Series");
    const totalTVSeries = countMoviesByType(movies, "TV Show");
    return (
        <AdminLayout>
            <div className="pt-12 lg:pt-0 px-4 bg-gradient-to-r from-sky-400 to-sky-600 pb-40 ">
                <h1 className="text-lg  text-white pt-12 lg:pl-4 uppercase">
                    DASHBOARD
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 -mt-24">
                <div className="bg-[#ffa500] text-white   m-4 rounded-xl h-36 shadow-md">
                    <div className="p-8 flex items-end justify-between">
                        <div>
                            <div className="w-12 h-12 bg-white text-[#ff53da]  rounded-full flex items-center justify-center">
                                <FaBloggerB className="text-3xl" />
                            </div>
                            <div className="flex items-end justify-between ">
                                <p className="md:text-2xl font-bold  mt-4">
                                    Total Movies
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-6xl">
                                {totalMovies}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-400 text-white   m-4 rounded-xl h-36 shadow-md">
                    <div className="p-8 flex items-end justify-between">
                        <div>
                            <div className="w-12 h-12 bg-white text-[#ff53da]  rounded-full flex items-center justify-center">
                                <FaRocketchat className="text-3xl" />
                            </div>
                            <div className="flex items-end justify-between ">
                                <p className="md:text-2xl font-bold  mt-4">
                                    Total Web-Series
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-6xl">
                                {totalWebSeries}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-[#5fbd07] text-white   m-4 rounded-xl h-36 shadow-md">
                    <div className="p-8 flex items-end justify-between">
                        <div>
                            <div className="w-12 h-12 bg-white text-[#ff53da]  rounded-full flex items-center justify-center">
                                <FaStoreAlt className="text-3xl" />
                            </div>
                            <div className="flex items-end justify-between ">
                                <p className="md:text-2xl font-bold  mt-4">
                                    Total TV-Series
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-6xl">
                                {totalTVSeries}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-[#07bdae] text-white   m-4 rounded-xl h-36 shadow-md">
                    <div className="p-8 flex items-end justify-between">
                        <div>
                            <div className="w-12 h-12 bg-white text-[#ff53da]  rounded-full flex items-center justify-center">
                                <FaStoreAlt className="text-3xl" />
                            </div>
                            <div className="flex items-end justify-between ">
                                <p className="md:text-2xl font-bold  mt-4">
                                    Total Users
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-6xl">
                                {totalTVSeries}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-[#4f0e6d] text-white   m-4 rounded-xl h-36 shadow-md">
                    <div className="p-8 flex items-end justify-between">
                        <div>
                            <div className="w-12 h-12 bg-white text-[#ff53da]  rounded-full flex items-center justify-center">
                                <FaStoreAlt className="text-3xl" />
                            </div>
                            <div className="flex items-end justify-between ">
                                <p className="md:text-2xl font-bold  mt-4">
                                    Total Subscriptions
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-6xl">
                                {totalTVSeries}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center  py-8 px-4 bg-white  mx-4 rounded-xl shadow-md">
                <div className="w-full ">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="lg:flex w-full justify-between">
                                <h3 className="text-gray-600   leading-5 text-base md:text-xl font-bold">
                                    Details of Visits
                                </h3>
                            </div>
                        </div>
                        <div className="mt-2">
                            <canvas
                                id="myChart"
                                width="1025"
                                height="200"
                                role="img"
                                aria-label="line graph to show selling overview in terms of months and numbers"
                            ></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
