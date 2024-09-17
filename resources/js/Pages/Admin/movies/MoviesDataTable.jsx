import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { utils, writeFile } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";

const MoviesDataTable = ({
    data,
    columns,

    actions = [],
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showingEntriesText, setShowingEntriesText] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(0);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(0);
    };

    const filteredData = data.filter((item) =>
        columns.some((column) =>
            item[column.key]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )
    );

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    const displayedData = filteredData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const exportToExcel = () => {
        const worksheet = utils.json_to_sheet(filteredData);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Data");
        writeFile(workbook, "data.xlsx");
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: columns.map((column) => column.label),
            body: filteredData.map((item, index) =>
                columns.map((column) => item[column.key])
            ),
        });
        doc.save("data.pdf");
    };

    // const stripHtmlTags = (str) => {
    //     const div = document.createElement("div");
    //     div.innerHTML = str;
    //     return div.textContent || div.innerText || "";
    // };

    // const renderField = (column, item) => {
    //     if (["images", "thumbnail"].includes(column.key) && item[column.key]) {
    //         if (customRenderFunction) {
    //             return customRenderFunction(item);
    //         } else {
    //             return (
    //                 <img
    //                     className="w-36 mx-auto rounded-xl"
    //                     src={item[column.key]}
    //                     alt=""
    //                 />
    //             );
    //         }
    //     } else {
    //         return <div>{stripHtmlTags(item[column.key].toString())}</div>;
    //     }
    // };

    useEffect(() => {
        const startEntry = currentPage * itemsPerPage + 1;
        const endEntry = Math.min(
            (currentPage + 1) * itemsPerPage,
            filteredData.length
        );
        const totalEntries = filteredData.length;
        setShowingEntriesText(
            `Showing ${startEntry} to ${endEntry} of ${totalEntries} entries`
        );
    }, [currentPage, itemsPerPage, filteredData]);

    return (
        <>
            <div className="overflow-auto border-2 rounded-xl border-gray-300">
                <div className="flex justify-between items-center p-4">
                    <div className="flex gap-2">
                        <div className="relative p-2">
                            <span className="text-black px-2">Show </span>
                            <select
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                                className="appearance-none text-black bg-white border border-gray-300 hover:border-gray-500 rounded-md text-sm leading-tight focus:outline-none focus:ring"
                            >
                                {[10, 20, 30, 40].map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <span className="text-black px-2">Entries </span>
                        </div>
                        <button
                            onClick={exportToExcel}
                            className="m-2 p-2 bg-white text-green-700 border-2 border-green-700 hover:border-green-500 hover:text-green-500 rounded-lg"
                        >
                            <SiMicrosoftexcel className="text-xl" />
                        </button>
                        <button
                            onClick={exportToPDF}
                            className="m-2 p-2 bg-white text-red-700 border-2 border-red-700 hover:border-red-500 hover:text-red-500 rounded-lg"
                        >
                            <FaFilePdf className="text-xl" />
                        </button>
                    </div>
                    <div>
                        <span className="text-black">Search : </span>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="mr-2 pr-2 border rounded-lg w-52 text-black"
                        />
                    </div>
                </div>
                <table className="w-full text-center ">
                    <thead>
                        <tr>
                            <th className="font-bold py-2 border-r border-b border-t border-gray-300 px-2 text-black">
                                S.N
                            </th>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="font-bold py-2 border-r border-b border-t border-gray-300 px-2 text-black"
                                >
                                    {column.label}
                                </th>
                            ))}
                            <th className="font-extrabold py-2 border-b border-t border-gray-300 px-2 text-black">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((item, index) => (
                            <tr key={item.id} className="rounded-bl-xl">
                                <td className="py-2 border-r border-t border-b border-gray-300 px-2 text-black">
                                    {currentPage * itemsPerPage + index + 1}
                                </td>
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className="py-2 border-r border-t border-b border-gray-300 px-2 text-black"
                                    >
                                        {column.render
                                            ? column.render(item)
                                            : item[column.key]}
                                    </td>
                                ))}
                                <td className="py-2 border-t border-b border-gray-300 px-2 text-black">
                                    <div className="flex items-center justify-center gap-1">
                                        {actions.map((action, idx) => (
                                            <React.Fragment key={idx}>
                                                {action(item)}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between p-4">
                    <div className="text-center mt-2 mb-4 text-gray-600 text-sm pl-5">
                        {showingEntriesText}
                    </div>
                    <ReactPaginate
                        previousLabel={
                            <span className="text-gray-400 bg-gray-200 p-2 rounded-lg">
                                Previous
                            </span>
                        }
                        nextLabel={
                            <span className="text-gray-400 bg-gray-200 p-2 rounded-lg">
                                Next
                            </span>
                        }
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination flex justify-center"}
                        pageClassName={
                            "px-4 py-2 border border-gray-300 rounded-md text-black cursor-pointer hover:bg-gray-200 hover:text-black"
                        }
                        activeClassName={"bg-blue-500 text-white"}
                        className="flex gap-2 items-center justify-end"
                    />
                </div>
            </div>
        </>
    );
};

export default MoviesDataTable;
