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
                <div className="px-36 py-16">
                    <img
                        className="w-48 h-full mx-auto"
                        src="/images/logo.png"
                        alt=""
                    />

                    <p className="text-white text-center pt-5 px-36">
                        Streamly - Free movies online, here you can watch movies
                        online in high quality for free without annoying of
                        advertising, just come and enjoy your movies online.
                        Streamlies, streamly, bmovies <br /> <br />
                        <span className="text-yellow-600 text-xl">
                            Disclaimer: This site does not store any files on
                            its server. All contents are provided by
                            non-affiliated third parties.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
