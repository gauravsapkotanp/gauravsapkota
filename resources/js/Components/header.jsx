// Header.jsx

import React from 'react';
import { RiFacebookFill,RiInstagramFill,RiGithubFill,RiTwitterFill,RiLinkedinFill } from 'react-icons/ri'

const Header = () => {
  return (
   <header>
    <div className="  fixed  left-3 top-0 bottom-0 w-80 ">
                <div className="mt-20 ml-2">
                    <div className=" text-white  backdrop-blur-sm rounded-2xl border-[1px] w-96 border-[#565656] p-2">

                        <div className="p-8">
                            <div className="grid grid-cols-2">
                                <div className="flex  items-center">
                                    <h1 className="text-4xl name">Gaurav</h1>

                                </div>
                                <div className="text-end heading">
                                    <h1 className=" font-bold text-sm">Flutter & <br/> Web Developer</h1>
                                </div>
                            </div>
                            <div className="py-8">
                                <img src="/images/user.jpg"
                                    className="rounded-xl w-full h-60 mx-auto object-cover" alt=""/>
                            </div>

                            <div className="text-center">
                                <h1 className="text-xl font-bold heading">gaurav.sapkota0007@gmail.com</h1>
                                <p className="text-xl heading">Based in Nepal,Chitwan</p>
                                <div className="py-5 text-gray-500">
                                    <p className="cursive">@ 2022 Gaurav. All Rights Reserved</p>
                                </div>
                            </div>
                            <ul className="flex items-center gap-x-3 justify-center">

                                <a href="https://www.facebook.com/profile.php?id=100089972786205" className="group"
                                    target="_blank">
                                    <li
                                        className="h-10 w-10 border-2 rounded-full flex items-center justify-center border-dashboard  group-hover:border-green-500  duration-700 ">
                                             <RiFacebookFill classNameName="text-red-500 text-2xl" />
                                       
                                    </li>
                                </a>
                                <a href="https://www.instagram.com/gauravsapkotanp/" className="group" target="_blank">
                                    <li
                                        className="h-10 w-10 border-2 rounded-full flex items-center justify-center border-dashboard  group-hover:border-green-500  duration-700 ">
                                         <RiInstagramFill classNameName="text-red-500 text-2xl" />
                                    </li>
                                </a>
                                <a href="https://github.com/Gauravsapkotanp" className="group" target="_blank">
                                    <li
                                        className="h-10 w-10 border-2 rounded-full flex items-center justify-center border-dashboard  group-hover:border-green-500  duration-700 ">
                                        <RiGithubFill classNameName="text-red-500 text-2xl" />
                                    </li>
                                </a>
                                <a href="#" className="group">
                                    <li
                                        className="h-10 w-10 border-2 rounded-full flex items-center justify-center border-dashboard  group-hover:border-green-500  duration-700 ">
                                      <RiTwitterFill classNameName="text-red-500 text-2xl" />
                                    </li>
                                </a>
                                <a href="#" className="group">
                                    <li
                                        className="h-10 w-10 border-2 rounded-full flex items-center justify-center border-dashboard  group-hover:border-green-500  duration-700 ">
                                        <RiLinkedinFill classNameName="text-red-500 text-2xl" />
                                    </li>
                                </a>
                            </ul>
                            <div className="mt-5">
                                <div
                                    className="bg-green-500 text-black text-center py-3 rounded-full hover:border-green-500 border-green-500 border-2 hover:bg-black hover:text-white duration-700 hover:cursor-pointer">
                                    <div>
                                        <i className="ri-mail-line"></i>
                                        <a href="#" className="heading font-bold">Hire Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   </header> 
  );
};

export default Header;
