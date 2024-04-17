import React from 'react';
import Header from '@/Components/header';
import Footer from '@/Components/footer';

export default function Welcome({ children }) {
    

    return (
        <>
  
        <div className="relative">
        <video autoPlay muted loop className="fixed inset-0 ">
        <source src="/videos/video4.mp4" type="video/mp4" />
        </video>
        <div className="bg-[#565656] bg-opacity-30   fixed  inset-0  ">
       <Header/>
            <div className=" relative z-40   text-red ml-[27rem] mr-[20rem] px-10">
                {children}
            </div>

            <Footer/>


      
        </div>

    </div>
        </>
    );
}
