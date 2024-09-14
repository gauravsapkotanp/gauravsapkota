import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { GrSecure } from "react-icons/gr";

const ChoosePayment = () => {
    const { props } = usePage();
    const { price } = props;
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
                        <GrSecure className="text-5xl text-sky-500 mx-auto" />
                        <h1 className="uppercase py-5 text-center">
                            Step <span className="font-bold">3</span> of
                            <span className="font-bold"> 3</span>
                        </h1>

                        <h1 className="text-4xl font-bold text-center text-black tracking-wider">
                            Choose how to pay.
                        </h1>
                        <p className="text-xl">
                            The plan you selected costs: NPR {price}
                        </p>
                        <p className="py-5 text-center">
                            Your Payment is encrypted and you can manage how{" "}
                            <br /> you pay anytime.
                        </p>

                        <div className="pt-8">
                            <Link href={route("planform")}>
                                <div className="h-40 w-full object-cover rounded-xl ">
                                    <img
                                        className=" object-cover h-full w-full  rounded-xl"
                                        src="/images/esewa.jpg"
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChoosePayment;
