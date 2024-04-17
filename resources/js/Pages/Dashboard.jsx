import AdminLayout from '@/Layouts/AdminLayout';
import { FaBloggerB,FaStoreAlt,FaRegEye ,FaTasks ,FaRocketchat } from "react-icons/fa";


export default function Dashboard({   }) {
    return (
        <AdminLayout
           
        >
             

            <div className="pt-12 lg:pt-0 px-4 bg-gradient-to-r from-orange-400 to-orange-500 pb-40 ">
        <h1 className="text-lg font-thin text-white  pt-12 pl-4">DASHBOARD</h1>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 -mt-24">
        <div className="bg-[#ffa500] text-white   m-4 rounded-xl h-36 shadow-md">
            <div className="p-8">
                <div className="w-12 h-12 bg-white text-[#ff53da]  rounded-full flex items-center justify-center">
                    <FaBloggerB className="text-3xl" />
                </div>
                <div className="flex items-end justify-between ">
                    <p className="md:text-lg font-bold  mt-4">Total Blogs</p>
                </div>
            </div>
        </div>
        <div className="bg-blue-400 text-white   m-4 rounded-xl h-36 shadow-md">
            <div className="p-8">
                <div className="w-12 h-12 bg-white text-blue-500 rounded-full flex items-center justify-center">
                    <FaStoreAlt className="text-3xl" />
                </div>
                <div className="flex items-end justify-between ">
                    <p className="md:text-lg font-bold  mt-4">Total Products</p>
                </div>
            </div>
        </div>
        <div className="bg-[#5fbd07] text-white   m-4 rounded-xl h-36 shadow-md">
            <div className="p-8">
                <div className="w-12 h-12 bg-white text-red-500 rounded-full flex items-center justify-center">
                    <FaRegEye className="text-3xl" />
                </div>
                <div className="flex items-end justify-between">
                    <p className="md:text-lg font-bold  mt-4">
                        Total Visits</p>
                </div>
            </div>
        </div>
        <div className="bg-blue-400 text-white   m-4 rounded-xl h-36 shadow-md">
            <div className="p-8">
                <div className="w-12 h-12 bg-white text-blue-500 rounded-full flex items-center justify-center">
                     
                    <FaTasks className="text-3xl" />
                </div>
                <div className="flex items-end justify-between ">
                    <p className="md:text-lg font-bold  mt-4">Appointments</p>
                </div>
            </div>
        </div>
        <div className="bg-blue-400 text-white   m-4 rounded-xl h-36 shadow-md">
            <div className="p-8">
                <div className="w-12 h-12 bg-white text-blue-500 rounded-full flex items-center justify-center">
                    <FaRocketchat className="text-3xl" />
                </div>
                <div className="flex items-end justify-between ">
                    <p className="md:text-lg font-bold  mt-4">Messages</p>
                </div>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-center  py-8 px-4 bg-white  mx-4 rounded-xl shadow-md">
        <div className="w-full ">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="lg:flex w-full justify-between">
                        <h3 className="text-gray-600   leading-5 text-base md:text-xl font-bold">
                            Details of Visits
                        </h3>
                    </div>

                </div>
                <div className="mt-2">
                    <canvas id="myChart" width="1025" height="200" role="img"
                        aria-label="line graph to show selling overview in terms of months and numbers"></canvas>
                </div>
            </div>
        </div>
    </div>
        </AdminLayout>
    );
}
