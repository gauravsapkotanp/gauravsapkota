import React, { useState, useEffect } from "react";
import NavLink from "@/Components/NavLink";
import { RiDashboardFill, RiCloseCircleFill, RiMenuFill } from "react-icons/ri";
import { router } from "@inertiajs/react";
import { ToastContainer } from "react-toastify";
import { route } from "ziggy-js";

export default function AdminLayout({ children }) {
    const [isCollapsed, setIsCollapsed] = useState(() => {
        const savedState = localStorage.getItem("isCollapsed");
        return savedState === "true";
    });

    useEffect(() => {
        localStorage.setItem("isCollapsed", isCollapsed);
    }, [isCollapsed]);

    function handleLogout(e) {
        e.preventDefault();
        router.post("logout");
    }

    return (
        <div className="bg-gray-200 min-h-screen pb-4">
            <div
                className={`fixed left-0 top-0 bottom-0 ${
                    isCollapsed ? "w-20" : "w-60"
                } z-50 bg-white shadow-lg shadow-[#213a57] overflow-auto transition-all duration-300`}
            >
                <div className="h-6 w-6 bg-gray-200 text-blue-500 rounded-full flex items-center justify-center float-right mt-2 lg:hidden">
                    {!isCollapsed && (
                        <RiCloseCircleFill className="text-2xl text-red-500" />
                    )}
                </div>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="bg-orange-500 float-right px-4 py-3 pb-4 m-3 rounded-xl text-white"
                >
                    <RiMenuFill className="text-2xl text-white" />
                </button>
                <div
                    className={`mx-4 mt-4 border-b pb-8 ${
                        isCollapsed
                            ? "mx-2 mt-2 border-b pb-3"
                            : "mx-4 mt-4 border-b pb-8"
                    }`}
                >
                    <img
                        className={`w-64 mx-auto rounded-full ${
                            isCollapsed ? "w-36" : "w-40"
                        }`}
                        src="/images/user.jpg"
                        alt=""
                    />
                </div>
                <div className="mt-4 mx-4">
                    <ul>
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                            activeClass="bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-md shadow-md shadow-blue-200"
                        >
                            <li className="text-xl font-medium p-2 flex items-center gap-2">
                                <RiDashboardFill className="text-2xl" />
                                <span
                                    className={`text-sm ${
                                        isCollapsed ? "hidden" : "block"
                                    }`}
                                >
                                    Dashboard
                                </span>
                            </li>
                        </NavLink>
                        <NavLink
                            href={route("blogs.index")}
                            active={route().current("blogs.*")}
                        >
                            <li className="text-xl font-medium p-2 flex items-center gap-2">
                                <RiDashboardFill className="text-2xl" />
                                <span
                                    className={`text-sm ${
                                        isCollapsed ? "hidden" : "block"
                                    }`}
                                >
                                    Blogs
                                </span>
                            </li>
                        </NavLink>
                        <NavLink
                            href={route("movies.index")}
                            active={route().current("movies.*")}
                        >
                            <li className="text-xl font-medium p-2 flex items-center gap-2">
                                <RiDashboardFill className="text-2xl" />
                                <span
                                    className={`text-sm ${
                                        isCollapsed ? "hidden" : "block"
                                    }`}
                                >
                                    Movies
                                </span>
                            </li>
                        </NavLink>
                        <NavLink onClick={handleLogout}>
                            <li className="text-xl font-medium p-2 flex items-center gap-2">
                                <span
                                    className={`text-sm ${
                                        isCollapsed ? "hidden" : "block"
                                    }`}
                                >
                                    Log Out
                                </span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div
                className={`${
                    isCollapsed ? "pl-20" : "pl-60"
                } transition-all duration-300`}
            >
                <div>{children}</div>
            </div>
            <ToastContainer />
        </div>
    );
}
