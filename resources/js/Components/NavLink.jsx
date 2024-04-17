import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                " flex items-center px-1 pt-1 border-b-2 text-sm  font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "bg-gradient-to-r from-orange-500 to-orange-400 p-2 text-white  rounded-md shadow-md shadow-blue-200"
                    : "text-xl font-medium  p-2  flex items-center  gap-2   hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500  hover:text-white  hover:rounded-md hover:shadow-md hover:shadow-blue-200") +
                " " +
                className
            }
        >
            {children}
        </Link>
    );
}
