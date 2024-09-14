import { Link } from "@inertiajs/react";
import React from "react";
import { FaRegCheckCircle, FaCheck } from "react-icons/fa";

const SignUpStep3 = () => {
    return (
        <>
            <div className=" bg-white">
                <div className="w-full py-2 px-16 border-b-2">
                    <div className="flex gap-10 items-center justify-between">
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
                                            <h1 className="text-white">
                                                Login
                                            </h1>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Step 2 of 3 */}
                <div className="flex items-center justify-center  my-28 border-4 border-sky-500 rounded-xl mx-96  ">
                    <div className="text-start py-16">
                        <FaRegCheckCircle className="text-5xl text-sky-500 mx-auto" />
                        <h1 className="uppercase py-5 text-center">
                            Step <span className="font-bold"> 2</span> of
                            <span className="font-bold"> 3</span>
                        </h1>

                        <h1 className="text-4xl font-bold text-black tracking-wider">
                            Choose Your Plan.
                        </h1>
                        <div className="flex  gap-5 pt-8">
                            <FaCheck className="text-2xl text-sky-500" />
                            <h1>
                                No Commitments, cancel <br /> anytime.
                            </h1>
                        </div>
                        <div className="flex  gap-5 py-5">
                            <FaCheck className="text-2xl text-sky-500" />
                            <h1>
                                Everything on Streamly for one
                                <br /> low Price.
                            </h1>
                        </div>
                        <div className="flex  gap-5  ">
                            <FaCheck className="text-2xl text-sky-500" />
                            <h1>No ads and no extra fees. Ever.</h1>
                        </div>

                        <div className="pt-8">
                            <Link href={route("planform")}>
                                <button className="bg-indigo-500 text-2xl px-8 py-5 w-full rounded-lg hover:bg-indigo-300 transition-all ease-in-out duration-300 delay-75 text-white font-bold">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpStep3;
