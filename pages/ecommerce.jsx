import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/ecommerce.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MobiMart - E-Commerce App</h2>
          <h3>React JS / Express JS / MongoDB / Bootstrap</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 px-2">
          <p className="p-1">Project</p>
          <h2>Overview</h2>
          <p className="text-justify md:pr-44 p-1 text-gray-300">
            A MERN full-stack project, this e-commerce web application uses
            authentication, sign-in, and sign-up features. Users can conduct
            needs and wants-based searches for products, add them to carts, and
            then complete the purchase later. Administrators have the ability to
            list their products according to categories, amend product
            information, rename categories, and add or remove new products. The
            PayPal API is used to integrate payments with the Braintree Payment
            Platform. Database management in this case is performed using the
            MongoDB database. Bootstrap has been used for the user interface to
            ensure that it is compatible with all devices, just like in this
            beginner-level project, which is mostly focused on functionality
            over design. On{" "}
            <a
              href="https://www.cyclic.sh/"
              target="_blank"
              className=" text-blue-500"
            >
              Cyclic
            </a>
            , this project is hosted.
          </p>

          <a
            href="https://github.com/jayant413/eCommerce"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://proud-moth-jewelry.cyclic.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-500 hover:shadow-gray-200 rounded-xl py-4">
          <div className="p-3 ml-1">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
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

export default property;
