import Image from "next/image";
import React from "react";
import movixImg from "../public/assets/projects/movix.png";
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
          src={movixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Movix</h2>
          <h3>Vite / SASS / Redux</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-justify md:pr-44 p-1 text-gray-300">
            Movix project, which is based on Vite - React JS and manages state
            using the Redux ToolKit. It now has a stunning appearance thanks to
            the sass/scss CSS framework, making it an even more amazing web
            project. Tmdb api has been used to get comprehensive information
            about films and TV shows.We also have view to ratings for particular
            films and TV shows. You may look for details on your favourite shows
            using the search feature.
          </p>
          <a
            href="https://github.com/fireclint/twitch-nextjs-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://movix-by-js.netlify.app"
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
                <RiRadioButtonFill className="pr-1" /> React JS - Vite
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SASS
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux ToolKit
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TMDB api
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
