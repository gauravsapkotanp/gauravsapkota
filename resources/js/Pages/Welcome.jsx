import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Tech from '@/Components/Tech';
import Projects from '@/Components/Projects';
import Experience from '@/Components/Experience';
import Contact from '@/Components/Contact';

export default function Welcome({ children }) {
    

    return (
        <>
    
        {/* <div className="relative">
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
    </div>   */}
    <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About/>
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>

        </>
    );
}
