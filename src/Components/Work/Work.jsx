import React from "react";
import Proj1 from "../../assets/proj1.png";
import Proj2 from "../../assets/proj2.png";
import Proj3 from "../../assets/proj3.png";
import Proj5 from "../../assets/proj5.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="bg-gray-100 py-2 mt-32 " id="works">
      <div className="pb-8 text-center">
        <p className="text-4xl mb-3 italic text-black mt-10"><span className="bg-yellow-200">My Work's</span> </p>
        <p className="text-gray-400">Check out one of my recent work</p>
      </div>

      <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:mx-24  md:mt-10 ">
        <div data-aos="flip-right">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[300px] w-[400px] relative">
          <img src={Proj1} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col ">
            <span className="text-2xl font-bold text-white pt-12"></span>
            <div className="pt-20 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        </div>

        <div  data-aos="flip-right">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[300px] w-[400px] bg-cover relative">
          <img src={Proj5} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col ">
            <span className="text-2xl font-bold text-white pt-12"></span>
            <div className="pt-20 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        </div>

        <div data-aos="flip-right">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[300px] w-[400px] bg-cover relative">
          <img src={Proj2} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col ">
            <span className="text-2xl font-bold text-white pt-12"></span>
            <div className="pt-20 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        </div>

        <div data-aos="flip-left">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[300px] w-[400px] bg-cover relative">
          <img src={Proj3} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col ">
            <span className="text-2xl font-bold text-white pt-12"></span>
            <div className="pt-20 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        </div>

        <div data-aos="flip-left">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[300px] w-[400px] bg-cover relative">
          <img src={Proj5} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col ">
            <span className="text-2xl font-bold text-white pt-12"></span>
            <div className="pt-20 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        </div>

        <div  data-aos="flip-left">

        <div 
     className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[300px] w-[400px] bg-cover relative">
          <img src={Proj1} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col ">
            <span className="text-2xl font-bold text-white pt-12"></span>
            <div className="pt-20 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        </div>
        

        
      </div>
<div className="flex justify-center py-20">
  <button className="text-xl font-extrabold flex justify-center pt-4 gap-2 bg-yellow-400 w-[200px] h-[60px] rounded-md hover:bg-transparent hover:border-2 border-yellow-400 text-white hover:text-black">
    View More <FaArrowRightLong className="mt-1 "/>
  </button>
</div>
      
    </div>
  );
};

export default Work;
