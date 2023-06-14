import Image from "next/image";
import React from "react";
import ytImg from "../public/assets/projects/yt.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ytImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">YouTube</h2>
          <h3>React JS / Styled Components / Rapid API / Redux ToolKit</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="p-1">Project</p>
          <h2>Overview</h2>
          <p className="text-justify md:pr-44 p-1 text-gray-300">
            I built this YouTube clone to demonstrate knowledge working in React
            JS and accessing API endpoints. This app was built using React JS
            and is hosted on{" "}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              className=" text-blue-500"
            >
              Netlify
            </a>
            . State management of this app is done with{" "}
            <a
              href="https://redux-toolkit.js.org/"
              target="_blank"
              className=" text-blue-500"
            >
              Redux Toolkit
            </a>
            . Users are able to search respective content on youtube . Another
            feature of this application is dynamic routing through the
            &quot;React Router DOM&quot; package. This application was built
            using the{" "}
            <a
              href="https://rapidapi.com/Glavier/api/youtube138/"
              target="_blank"
              className=" text-blue-500"
            >
              Youtube Rapid API.
            </a>{" "}
            React player was used to play videos of youtube.
          </p>
          <a
            href="https://github.com/jayant413/react_youtube_js"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://youtube-by-js.netlify.app/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl hover:shadow-gray-300 shadow-gray-500 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Styled Components
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Rapid API
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux ToolKit
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="px-8 py-2 mt-4 ">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
