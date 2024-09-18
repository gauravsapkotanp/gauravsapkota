import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

const LoginSignup = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.email === "" || data.password === "") {
            alert("Both fields are required");
        } else {
            post(route("login"));
        }
    };
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
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-55">
                    <div className="text-center border  border-b-8 text-white border-sky-600 p-8 rounded-xl bg-black bg-opacity-65">
                        <h1 className="text-3xl font-bold text-left pb-10">
                            Sign In
                        </h1>
                        <div className=" ">
                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="bg-gray-700 bg-opacity-35 w-96 text-white ring-0 focus:ring-0 focus:outline-none placeholder-gray-500 placeholder:text-start px-3 py-4 rounded-lg"
                                    />
                                    {errors.email && (
                                        <div className="text-red-500 text-sm">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="py-8">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="bg-gray-700 bg-opacity-35 w-96 text-white ring-0 focus:ring-0 focus:outline-none placeholder-gray-500 placeholder:text-start px-3 py-4 rounded-lg"
                                    />
                                    {errors.password && (
                                        <div className="text-red-500 text-sm">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-indigo-500 px-8 py-3 w-full rounded-lg hover:bg-indigo-300 transition-all ease-in-out duration-300 delay-75 text-white font-bold"
                                >
                                    {processing ? "Signing In..." : "Sign In"}
                                </button>
                                <h1 className="uppercase text-center py-5 font-bold text-xl">
                                    OR
                                </h1>
                                <button className="bg-gray-500 px-8 py-3 w-full rounded-lg hover:bg-gray-600 transition-all ease-in-out duration-300 delay-75 text-white font-bold">
                                    Use a Sign-In Code
                                </button>
                                <h1 className="text-center py-2 font-bold text-sm hover:underline hover:cursor-pointer">
                                    Forgot Password?
                                </h1>
                            </form>
                            <Link href={route("main")}>
                                {" "}
                                <h1 className="text-start pt-8 font-bold text-sm hover:underline hover:cursor-pointer">
                                    New to Streamly? Signup now.
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
