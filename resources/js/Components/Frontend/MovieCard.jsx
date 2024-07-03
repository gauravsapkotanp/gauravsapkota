import React, { useState, useEffect } from "react";

import "../../../css/navswiper.css";
import {
    RiPlayCircleFill,
    RiBookmarkLine,
    RiBookmarkFill,
    RiStarFill,
} from "react-icons/ri";

const MovieCard = () => {
    const [hover, setHover] = useState(false);

    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        let timer;
        if (hover) {
            timer = setTimeout(() => {
                setShowDetails(true);
            }, 200);
        } else {
            setShowDetails(false);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [hover]);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <>
            <div
                className="relative  group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-48   group-hover:cursor-pointer transition-all ease-in-out duration-300 delay-150">
                    <div className="w-48">
                        <div className="relative  ">
                            <div>
                                <img
                                    className="h-64 w-48 rounded-2xl object-cover shadow-inner-custom "
                                    src="/images/img1.jpg"
                                    alt=""
                                />
                            </div>

                            <RiPlayCircleFill className="absolute z-20 inset-0 m-auto mt-20 text-5xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                            <span className="bg-sky-600 text-xs text-white rounded-br-lg rounded-tr-lg font-bold uppercase px-1.5 py-1 absolute top-5 z-20">
                                HD
                            </span>
                            <div className="absolute z-10 h-64 w-48 shadow-overlay-card opacity-0 group-hover:opacity-70 rounded-2xl transition-all ease-in-out duration-300 delay-150"></div>
                            <div className="flex items-center justify-between py-2 px-2">
                                <h1 className="text-gray-500 text-xs">2024</h1>
                                <h1 className="border-2 border-gray-500 text-xs text-gray-500 group-hover:text-sky-600 group-hover:border-sky-600 transition-all ease-in-out duration-300 delay-150 uppercase px-1 rounded-full">
                                    Movie
                                </h1>
                                <span className="text-gray-500 text-xs">
                                    99 min
                                </span>
                            </div>
                            <h1 className="text-gray-300 text-lg font-bold group-hover:text-sky-600 px-2 transition-all ease-in-out duration-300 delay-150">
                                IF
                            </h1>
                        </div>
                    </div>
                </div>
                {showDetails && (
                    <div className="absolute z-30 top-8 w-72 left-[200px] overflow-hidden">
                        <div className="bg-[#181818] bg-opacity-80 backdrop-blur-3xl shadow-xl rounded-lg p-4 transition-opacity duration-300 ease-in-out">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-white">
                                    IF
                                </h1>
                                <RiBookmarkLine className="text-2xl text-white hover:text-sky-600" />
                            </div>
                            <div className="flex items-center my-2 gap-2">
                                <span className="bg-sky-600 text-xs text-black font-bold uppercase px-2 py-1 rounded-full">
                                    HD
                                </span>
                                <span className="border-2 border-sky-600 text-sky-600 text-sm uppercase px-1 rounded-full">
                                    PG
                                </span>
                                <div className="flex gap-1 items-center">
                                    <RiStarFill className="text-sky-600 text-sm" />
                                    <span className="text-sky-600 text-sm">
                                        0
                                    </span>
                                </div>
                                <span className="text-sky-600 text-sm">
                                    2024
                                </span>
                                <span className="text-sky-600 text-sm">
                                    99 min
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MovieCard;
