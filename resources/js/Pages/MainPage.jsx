import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { route } from "ziggy-js";

const MainPage = () => {
    const { data, setData, post } = useForm({
        email: "",
    });

    const handleEmailChange = (e) => {
        setData("email", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("signup"), { email: data.email });
    };

    return (
        <>
            <div className="relative">
                <img
                    className="h-screen w-full object-cover"
                    src="/images/netflixbg.jpg"
                    alt=""
                />
                <div className="absolute inset-0 z-10  px-96 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <img
                                className="h-full w-48"
                                src="/images/logo.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <Link
                                href={route("getstarted")}
                                className="bg-indigo-500 text-2xl px-8 py-2  rounded-full hover:bg-indigo-300 transition-all ease-in-out duration-300 delay-75 text-white font-bold"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-55">
                    <div className="text-center z-50">
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

                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center justify-center gap-5 my-8">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    value={data.email}
                                    onChange={handleEmailChange}
                                    className="bg-gray-700 bg-opacity-35 w-96 text-white ring-0 focus:ring-0 focus:outline-none placeholder-gray-500 px-3 py-2 rounded-lg"
                                />
                                <button
                                    type="submit"
                                    className="bg-sky-500 px-8 py-3 rounded-lg hover:bg-sky-600 transition-all ease-in-out duration-300 delay-75 text-white font-bold"
                                >
                                    Get Started
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
