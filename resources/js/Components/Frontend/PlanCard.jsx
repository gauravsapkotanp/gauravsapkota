const PlanCard = ({
    title,
    resolution,
    price,
    quality,
    subtitle,
    support,
    download,
    className,
    isSelected,
    onClick,
    showMostPopular,
}) => {
    return (
        <div
            className={`border p-3 rounded-xl cursor-pointer ${
                isSelected
                    ? "shadow-xl border-indigo-500 border-4 shadow-indigo-500"
                    : "border-black"
            }`}
            onClick={onClick}
        >
            {showMostPopular && (
                <div className="bg-red-500 text-white font-bold p-2 rounded-full mb-2 text-center">
                    Most Popular
                </div>
            )}
            <div className={`border p-5 mb-5 rounded-xl ${className}`}>
                <h1 className="text-xl font-bold text-white">{title}</h1>
                <h1 className="text-sm font-bold text-white">{subtitle}</h1>
            </div>
            <div className="p-2">
                <h1 className="pb-1.5 uppercase font-bold text-sm">
                    Monthly Price
                </h1>
                <p className="border-b pb-4 border-black">NPR {price}</p>
            </div>
            <div className="p-2">
                <h1 className="pb-1.5 uppercase font-bold text-sm">
                    Videos and sound quality
                </h1>
                <p className="border-b pb-4 border-black">{quality}</p>
            </div>
            <div className="p-2">
                <h1 className="pb-1.5 uppercase font-bold text-sm">
                    Resolution
                </h1>
                <p className="border-b pb-4 border-black">{resolution}</p>
            </div>
            <div className="p-2">
                <h1 className="pb-1.5 uppercase font-bold text-sm">
                    Supported devices
                </h1>
                <p className="border-b pb-4 border-black">{support}</p>
            </div>
            <div className="p-2">
                <h1 className="pb-1.5 uppercase font-bold text-sm">
                    Download Devices
                </h1>
                <p className="pb-4 border-black">{download}</p>
            </div>
        </div>
    );
};

export default PlanCard;
