import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import education from "../../assets/education.jpg";
import experence from "../../assets/experence.avif";

const Education = () => {
  return (
    <div className="md:h-full bg-gray-100">
      <div className="pb-8 text-center pt-1 ">
        <p className="text-4xl mb-3  italic text-black mt-10">
          <span className="bg-yellow-200">EDUCATION </span>
          <h2>/ WORK EXPERENCE</h2>
        </p>
      </div>

      <div className="">
        <h1
          className=" underline underline-offset-2
             text-3xl font-extrabold flex  ml-10 pl-20 text-yellow-700"
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          EDUCATION
        </h1>
      </div>

      <div className="">
        <div className="md:grid grid-cols-2">
          <div className="md:grid grid-rows-2 ">
            <div
              data-aos="fade-up"
              className="bg-zinc-800 hover:bg-black px-10 py-7 h-[150px] md:w-[700px] md:mx-10 my-10 rounded-xl flex"
            >
              <div>
                <GiGraduateCap className="size-11 my-2 p-1 bg-white rounded-full" />
              </div>
              <div className="mx-8 text-white">
                <h6 className="font-extrabold  text-yellow-400">2019-2023</h6>
                <h1 className="font-extrabold md:text-xl">
                  BACHELOR OF SCIENCE
                </h1>
                <p className=" text-lg">Sree Krishna College, Guruvayur</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="bg-zinc-800 hover:bg-black px-10 py-7 h-[150px] md:w-[700px] md:mx-10 rounded-xl flex"
            >
              <div>
                <GiGraduateCap className="size-11 my-2 p-1 bg-white rounded-full" />
              </div>
              <div className="mx-8 text-white ">
                <h6 className="font-extrabold  text-yellow-400">2018-2019</h6>
                <h1 className="font-extrabold md:text-xl">12th GRADE</h1>
                <p className=" text-lg">GMBHSS Kunnamkulam, Thrissur</p>
              </div>
            </div>
          </div>
          <div className="md:pt-4 py-10" data-aos="zoom-in">
            <img src={education} alt="" />
          </div>
        </div>
        <br />
        {/* <div className="flex py-6" data-aos="fade-up">
          <div className="bg-zinc-800 px-10 py-7 w-[800px] mx-10 rounded-xl flex">
            <div>
              <GiGraduateCap className="size-11 my-2 p-1 bg-white rounded-full" />
            </div>
            <div className="mx-8 text-white">
              <h6 className="font-extrabold text-yellow-400">2016-2017</h6>
              <h1 className="font-extrabold text-xl">10th GRADE</h1>
              <p className="font-bold text-lg">
                Sree Krishna College ,Guruvayur
              </p>
            </div>
          </div>
        </div> */}
        <div className="py-10 px-4">
          <h1
            className=" underline underline-offset-2
             text-3xl font-extrabold flex justify-end mr-4 pr-20 md:ml-[680px] text-yellow-700"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            EXPERIENCE
          </h1>
        </div>
        <div>
         
          <div className="md:grid grid-cols-2 ">
            <div className=" md:ml-2 md:px-16 m:pl-20 ">
              <img
                src={experence}
                width={450}
                className="rounded-3xl "
                alt=""
              />
            </div>
            <div className="md:grid grid-rows-2 ">
              <div
                data-aos="fade-up"
                className="bg-zinc-800 hover:bg-black px-10 py-7 h-[150px] md:w-[700px] md:mx-10 my-10 rounded-xl flex"
              >
                <div>
                  <GiGraduateCap className="size-11 my-2 p-1 bg-white rounded-full" />
                </div>
                <div className="mx-8 text-white">
                  <h6 className="font-extrabold  text-yellow-400">2019-2023</h6>
                  <h1 className="font-extrabold md:text-xl">
                    BACHELOR OF SCIENCE
                  </h1>
                  <p className=" text-lg">Sree Krishna College, Guruvayur</p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-zinc-800 hover:bg-black px-10 py-7 h-[150px] md:w-[700px] my-10 md:mx-10 rounded-xl flex"
              >
                <div>
                  <GiGraduateCap className="size-11 my-2 p-1 bg-white rounded-full" />
                </div>
                <div className="mx-8 text-white ">
                  <h6 className="font-extrabold  text-yellow-400">2018-2019</h6>
                  <h1 className="font-extrabold md:text-xl">12th GRADE</h1>
                  <p className=" text-lg">GMBHSS Kunnamkulam, Thrissur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end"><img src={education} alt="" /></div> */}
    </div>
  );
};

export default Education;
