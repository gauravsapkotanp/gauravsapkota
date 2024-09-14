import { Link } from "@inertiajs/react";
import React from "react";

const SignUpStep2 = () => {
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
                <div className="flex items-center justify-center  my-36  ">
                    <div className="text-start">
                        <h1 className="uppercase py-5">
                            Step <span className="font-bold"> 2</span> of
                            <span className="font-bold"> 3</span>
                        </h1>

                        <h1 className="text-4xl font-bold text-black tracking-wider">
                            Create a password to start <br /> your membership
                        </h1>
                        <p className="text-black text-base py-5">
                            Just a few more steps and you're done! <br /> We
                            hate paperwork, too.
                        </p>
                        <form action="">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="bg-white bg-opacity-35 w-full  text-white ring-0 focus:ring-0  focus:outline-none placeholder-gray-500 placeholder:text-start px-3 py-5 rounded-lg"
                                />
                            </div>
                            <div className="py-8">
                                <input
                                    type="text"
                                    placeholder="Password"
                                    className="bg-white bg-opacity-35 w-full  text-white ring-0 focus:ring-0  focus:outline-none placeholder-gray-500 placeholder:text-start px-3 py-5 rounded-lg"
                                />
                            </div>
                        </form>
                        <Link href={route("signupstep3")}>
                            <button className="bg-indigo-500 text-2xl px-8 py-5 w-full rounded-lg hover:bg-indigo-300 transition-all ease-in-out duration-300 delay-75 text-white font-bold">
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpStep2;
