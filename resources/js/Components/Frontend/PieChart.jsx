import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ totalusers, activeusers, inactiveusers }) => {
    // console.log(totalusers, activeusers, inactiveusers);

    const total = totalusers;
    const inactivePercentage = (inactiveusers / total) * 100;
    const activePercentage = (activeusers / total) * 100;

    const data = {
        labels: ["Active Users", "Inactive Users", "Total Users"],
        datasets: [
            {
                label: "User Distribution",
                data: [activePercentage, inactivePercentage, total],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 2,
            },
        ],
    };
    // Pie chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || "";
                        const value = context.raw || "";
                        return `${label}: ${value.toFixed(2)}%`;
                    },
                },
            },
        },
    };

    return (
        <>
            <div className="bg-white text-red-500  h-96   rounded-xl   shadow-md p-4">
                <div className="h-72">
                    <Pie data={data} options={options} />
                    <h1 className="font-bold text-2xl text-center pt-5">
                        User Distribution
                    </h1>
                </div>
            </div>
        </>
    );
};

export default PieChart;
