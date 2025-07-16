import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-100">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-100">
            Hi, I&#39;m <span className="text-[#5651e5]"> Jayant</span>
          </h1>
          <h1 className="py-2 text-gray-100">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-100 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            interacting with back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/jayant-sawarkar-401-"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-500 hover:shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/jayant413"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-500 hover:shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-500 hover:shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>

            <div className="rounded-full shadow-lg shadow-gray-500 hover:shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="Jayant_Sawarkar_Resume.pdf"
                download="Jayant_Sawarkar_8459299053"
              >
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
