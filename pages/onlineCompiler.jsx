import Image from "next/image";
import React from "react";
import online_compiler from "../public/assets/projects/onlineCompiler.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={online_compiler}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Programiz | Online Compiler</h2>
          <h3>MERN / SASS / Redux</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-justify md:pr-44 p-1 text-gray-300">
            This project was created in MERN. Using the Judge0 API with multiple
            language(PHP, C, C#, GO, etc) CodeMirror library for semantic
            suggestions and coding area. SCSS is used for styling in front-end
            in React JS.
          </p>
          <a
            href="https://github.com/jayant413/Online-Compiler"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://online-compiler-by-js.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 ">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-500 hover:shadow-gray-300  rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MERN
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SASS
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux ToolKit
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Judge0 api
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="px-8 py-2 mt-4">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
