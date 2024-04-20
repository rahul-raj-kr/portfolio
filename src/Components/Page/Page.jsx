import React from "react";
import Image from "../../assets/home.jpg";
import About1 from "../../assets/about.png";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Page = () => {
  return (
    <div className="flex  bg-yellow-400 h-[600px] text-white ">
      <div className=" md:mx-[600px] mx-7 pt-56  w-[500px] cursor-pointer"
      data-aos="fade-up">
        <h2
          data-aos="flip-up"
          className="text-2xl font-serif mx-24 text-gray-700 "
        >
          Hi There , I'm
        </h2>
        <h1
          data-aos="zoom-out"
          className="text-5xl font-serif w-96 hover:scale-105 transition duration-150 ease-in-out"
        >
          RAHUL RAJ KR
        </h1>
        <br />
        <div
          data-aos="fade-up"
          className="bg-yellow-500 p-2 w-[250px] mx-10 rounded-md  shadow-xl "
        >
          <h1 className="ml-7 text-black font-extrabold">
            I'M A WEB DEVELOPER
          </h1>
        </div>
        <div className="flex justify-center w-[300px] bg-black h-[45px] my-36 ml-3 p-2 gap-12 rounded-full ">
        <a href=""><BsInstagram className="size-6 hover:scale-125 duration-150"/></a>
        <a href=""><SiWhatsapp className="size-6 hover:scale-125 duration-150"/></a>
        <a href=""><FaLinkedin className="size-6 hover:scale-125 duration-150"/></a>
        <a href=""><ImFacebook2 className="size-6 hover:scale-125 duration-150 rounded-full"/></a>
        </div>
        
      </div>
      
    </div>
  );
};

export default Page;
