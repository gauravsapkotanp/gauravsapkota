import NavSwiper from "@/Components/Frontend/NavSwiper";
import Header from "@/Components/Frontend/header";
import React from "react";

export default function Welcome({ children }) {
    return (
        <>
            <div className="bg-[#181818] ">
                <Header />
                <div className="-mt-24">
                    <NavSwiper />
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}
