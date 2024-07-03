import React from "react";

const MovieCardHovered = () => {
    return (
        <>
            <div>
                <div className="">
                    <div className="bg-white shadow-xl w-full rounded-lg ">
                        <div className="p-5  ">
                            <div className="h-60 overflow-y-scroll">
                                <div className="border-b">
                                    <div className="flex gap-5 my-2   items-center">
                                        <div>
                                            <h1 className="text-xs">
                                                Heading of the product
                                            </h1>
                                            <p className="text-xs">
                                                <span>3</span> x{" "}
                                                <span>rate</span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b ">
                                    <div className="flex gap-5 my-2   items-center">
                                        <img
                                            className="w-12"
                                            src="images/cauli.jpg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="text-xs">
                                                Heading of the product
                                            </h1>
                                            <p className="text-xs">
                                                <span>3</span> x{" "}
                                                <span>rate</span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex my-2 justify-between">
                                    <h1 className="text-gray-300">Subtotal:</h1>
                                    <h1 className="text-lg font-bold text-red-600">
                                        $68.37
                                    </h1>
                                </div>
                                <div className="text-center">
                                    <button className="border p-3 text-center w-full rounded-md">
                                        View Cart
                                    </button>
                                    <button className="border mt-2 bg-red-600 text-white font-bold rounded-md p-3 text-center w-full">
                                        Checkout
                                    </button>
                                </div>
                                <h1 className="text-sm py-5 text-gray-400">
                                    We reduce shipping prices to only $20
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieCardHovered;
