// Header.jsx

import React from "react";
import { RiHome3Line, RiUser6Line, RiSuitcaseLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="mt-32">
            <div
                style={{
                    backgroundImage: "url(/images/footer.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className=" w-full   "
            >
                <div className="">
                    <div className="grid grid-cols-3 gap-10 px-36 py-16">
                        <div>
                            <img
                                className="w-48 h-full"
                                src="/images/logo.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
