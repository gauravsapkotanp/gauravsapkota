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
                " text-xl font-medium  p-2 mt-4  flex items-center text-gray-600   gap-2   hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500  hover:text-white  hover:rounded-md hover:shadow-md hover:shadow-blue-200" +
                (active
                    ? " bg-gradient-to-r from-orange-500 to-orange-400 text-white  rounded-md shadow-md shadow-blue-200"
                    : "   ") +
                " " +
                className
            }
        >
            {children}
        </Link>
    );
}
