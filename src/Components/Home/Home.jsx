import React from "react";
import { FaGripLines } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
      <div>
        <div className="bg-black h-[100px] w-full flex justify-between items-center">
          <h1
            className="md:lg:ml-44 ml-4 font-bold text-2xl text-white  "
            data-aos="zoom-in"
          >
            RAHUL.
          </h1>
      <div> 
          <ul
            className="md:flex gap-10 mr-48 text-white hidden"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Link activeClass="active" to="target" spy={true} smooth={true}>
              <li className=" hover:text-yellow-300 ">
                <a href="">HOME</a>
              </li>
            </Link>

            <Link activeClass="active" to="about" spy={true} smooth={true}>
              <li className=" hover:text-yellow-300 ">
                <a href="">ABOUT</a>
              </li>
            </Link>
            <Link activeClass="active" to="works" spy={true} smooth={true}>
              <li className=" hover:text-yellow-300 ">
                <a href="">WORKS</a>
              </li>
            </Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true}>
              <li className=" hover:text-yellow-300 ">
                <a href="">SKILLS</a>
              </li>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true}>
              <li className=" hover:text-yellow-300 ">
                <a href="">CONTACT</a>
              </li>
            </Link>
          </ul>
          </div>
          <div className="md:hidden flex mr-5">
            <FaGripLines  className="text-white size-8" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
