import PlanCard from "@/Components/Frontend/PlanCard";
import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

const PlanForm = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            title: "Mobile",
            subtitle: "480p",
            price: "  800",
            quality: "Fair",
            resolution: "480p",
            support: "Mobile and Tablet",
            download: "1",
            className: "bg-gradient-to-br from-indigo-600 to-indigo-400",
        },
        {
            title: "Basic",
            subtitle: "720p",
            price: "  1200",
            quality: "Good",
            resolution: "720p(HD)",
            support: "TV, Computer, Mobile and Tablet",
            download: "1",
            className: "bg-gradient-to-br from-indigo-600 to-purple-800",
        },
        {
            title: "Standard",
            subtitle: "1080p",
            price: "  1600",
            quality: "Great",
            resolution: "1080p (Full HD)",
            support: "TV, Computer, Mobile and Tablet",
            download: "2",
            className: "bg-gradient-to-br from-indigo-600 to-pink-900",
        },
        {
            title: "Premium",
            subtitle: "4K + HDR",
            price: " 2000",
            quality: "Best",
            resolution: "4K (Ultra HD) + HDR",
            support: "TV, Computer, Mobile and Tablet",
            download: "6",
            className: "bg-gradient-to-br from-indigo-600 to-pink-500",
            isMostPopular: true,
        },
    ];

    return (
        <>
            <div className="bg-white mx-48">
                <div>
                    <h1 className="uppercase py-5 text-start">
                        Step <span className="font-bold"> 2</span> of
                        <span className="font-bold"> 3</span>
                    </h1>
                    <h1 className="text-3xl font-bold text-black tracking-wider">
                        Choose the plan that's right for you.
                    </h1>

                    <div className="grid grid-cols-4 gap-5 mt-5">
                        {plans.map((plan, index) => (
                            <PlanCard
                                key={index}
                                {...plan}
                                isSelected={selectedPlan === index}
                                onClick={() => setSelectedPlan(index)}
                                showMostPopular={index === plans.length - 1}
                            />
                        ))}
                    </div>

                    <p className="text-sm pt-8 tracking-wide leading-6">
                        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
                        availability subject to your internet service and device
                        capabilities. Not all content is available in all
                        resolutions. See our Terms of Use for more details. Only
                        people who live with you may use your account. Watch on
                        4 different devices at the same time with Premium, 2
                        with Standard, and 1 with Basic and Mobile.
                    </p>

                    <div className="py-5 mx-96 text-center">
                        <Link
                            href={route("choosepayment", {
                                price: plans[selectedPlan]?.price,
                            })}
                            disabled={selectedPlan === null}
                        >
                            <button
                                className={`bg-indigo-500 w-full text-2xl px-32 py-5 rounded-lg ${
                                    selectedPlan === null
                                        ? "bg-gray-400 cursor-not-allowed  "
                                        : "hover:bg-indigo-300 transition-all ease-in-out duration-300 delay-75  "
                                } text-white font-bold`}
                            >
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlanForm;
