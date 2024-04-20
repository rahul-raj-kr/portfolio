import React from "react";
import About1 from "../../assets/about1.jpg";
import { ImDownload3 } from "react-icons/im";
import Img from '../../assets/vaanam.pdf'


const About = () => {
  return (
    <div  className="" id="about">
      <div className=" max-w-[1200px] mx-auto my-12">
        <div className="md:grid md:grid-cols-2 sm:py-16">
          <img
          data-aos="zoom-in"
            className="mx-auto rounded-3xl py-8 md:py-0"
            src={About1}
            width={500}
            height={500}
            alt=""
          />

          <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
            <div className="my-auto mx-6">
              <h1 className="text-4xl mb-7 italic">
                <span className="bg-yellow-200">About Me</span>
              </h1>
              <p className="text-base lg:text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, tempora deleniti itaque animi dicta maiores
                praesentium autem atque quaerat eos.
              </p>
              
              <button
                className="btn bg-red-800 text-white font-bold px-6 py-2 rounded-lg flex gap-3 mt-10 hover:bg-transparent hover:border-2 border-red-600 hover:text-black "
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                download cv<ImDownload3 className="mt-1 " />
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <img src={About1} alt="" />
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
