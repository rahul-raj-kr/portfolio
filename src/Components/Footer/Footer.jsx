import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-500 text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-8">
            <a href="">
              <BsInstagram className="size-6 hover:scale-125 duration-150" />
            </a>
            <a href="">
              <SiWhatsapp className="size-6 hover:scale-125 duration-150" />
            </a>
            <a href="">
              <FaLinkedin className="size-6 hover:scale-125 duration-150" />
            </a>
            <a href="">
              <ImFacebook2 className="size-6 hover:scale-125 duration-150 rounded-full" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Rahul Raj KR</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
