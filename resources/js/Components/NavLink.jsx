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
                " text-xl font-medium  p-2 mt-4  flex items-center text-gray-600   gap-2   hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500  hover:text-white  hover:rounded-md hover:shadow-md hover:shadow-blue-200" +
                (active
                    ? " bg-gradient-to-r from-sky-500 to-sky-400 text-white  rounded-md shadow-md shadow-blue-200"
                    : "   ") +
                " " +
                className
            }
        >
            {children}
        </Link>
    );
}
