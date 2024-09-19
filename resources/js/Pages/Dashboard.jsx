import AdminLayout from "@/Layouts/AdminLayout";
import { FaBloggerB, FaStoreAlt, FaRegEye, FaRocketchat } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import PieChart from "@/Components/Frontend/PieChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Helper function to count movies by type
const countMoviesByType = (movies, type) => {
    return movies.filter((movie) => movie.type === type).length;
};

export default function Dashboard({
    movies,
    totalmovies,
    visits,
    visitdate,
    totalvisits,
    totalusers,
    activeusers,
    inactiveusers,
}) {
    // Count movies by type
    const totalMovies = countMoviesByType(movies, "Movie");
    const totalWebSeries = countMoviesByType(movies, "Web Series");
    const totalTVSeries = countMoviesByType(movies, "TV Show");

    const labels = visitdate.map((date) => date);
    const data = {
        labels,
        datasets: [
            {
                label: "Number of Visits",
                data: visits,
                fill: true,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
                CategoryScale: "CategoryScale",
                LinearScale: "LinearScale",
                PointElement: "PointElement",
                LineElement: "LineElement",
                Title: "Title",
                Tooltip: "Tooltip",
                Legend: "Legend",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "top",
                display: false,
            },
        },
        interaction: {
            intersect: false,
            mode: "index",
            boxWidth: 20,
        },
        scales: {
            y: {
                grid: {
                    drawBorder: true,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [8, 8],
                    color: "rgba(255, 255, 255, .2)",
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 500,
                    beginAtZero: true,
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 300,
                        family: "Roboto",
                        style: "normal",
                        lineHeight: 2,
                    },
                    color: "black",
                },
            },
            x: {
                grid: {
                    drawBorder: true,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    borderDash: [8, 8],
                    color: "rgba(255, 255, 255, 1.2)",
                },
                ticks: {
                    display: true,
                    color: "black",
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 100,
                        family: "sans-serif",
                        style: "normal",
                        lineHeight: 2,
                    },
                },
            },
        },
    };
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
            </div>

            <div className="flex gap-10 items-center justify-center py-8 px-4    ">
                <div className="w-[50%] bg-white p-2 rounded-xl shadow-md">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="lg:flex w-full justify-between items-center">
                                <h3 className="text-gray-600 leading-5 text-base md:text-xl font-bold">
                                    Details of Visits
                                </h3>
                                <div className="flex gap-5 items-center justify-center ">
                                    <FaRegEye className="text-3xl text-red-500" />
                                    <h3 className="text-gray-600 leading-5 text-3xl md:text-3xl   heading font-bold">
                                        {totalvisits}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className=" h-96 w-full">
                            <Line data={data} options={options} />
                        </div>
                    </div>
                </div>
                <div className="w-[50%] ">
                    <PieChart
                        totalusers={totalusers}
                        activeusers={activeusers}
                        inactiveusers={inactiveusers}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
