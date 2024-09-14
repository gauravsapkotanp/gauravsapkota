import { Link } from "@inertiajs/react";
import React from "react";

const MainPage = () => {
    return (
        <>
            <div className="relative">
                <img
                    className="h-screen w-full object-cover"
                    src="/images/netflixbg.jpg"
                    alt=""
                />
                <div className="absolute top-0 left-0 right-0 z-50">
                    <div className="w-full py-2 px-16">
                        <div className="flex gap-10 items-center justify-between">
                            <div className="flex gap-5">
                                <img
                                    src="/images/logo.png"
                                    className="mx-auto w-32 "
                                    alt=""
                                />
                            </div>

                            <div className=" ">
                                <Link href={route("getstarted")}>
                                    <button className="border-2  py-1.5 transition-all ease-in-out duration-300 delay-75  bg-sky-600 hover:border-sky-600 text-white px-7 rounded-full flex items-center justify-items-center gap-2">
                                        <h1 className="text-white">Login</h1>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-55">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-white tracking-wider">
                            Unlimited movies, TV <br /> shows and more
                        </h1>
                        <h1 className="text-white py-5 text-base font-bold tracking-wider">
                            Starts at NPR 1500. Cancel anytime
                        </h1>

                        <h1 className="text-white font-semibold">
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </h1>
                        <div className="flex items-center justify-center gap-5 my-8">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="bg-gray-700 bg-opacity-35 w-96  text-white ring-0 focus:ring-0  focus:outline-none placeholder-gray-500 placeholder:text-start px-3 py-2 rounded-lg"
                            />

                            <Link href={route("signup")}>
                                <button className="bg-sky-500 px-8 py-3 rounded-lg hover:bg-sky-600 transition-all ease-in-out duration-300 delay-75 text-white font-bold">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
