import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="p-2 text-gray-300 text-justify ">
           Hello, this is Jayant. I am a computer science undergraduate student at SPPU in Pune, India. I am a full-stack web developer looking for a chance to use my abilities. To adapt to my career, I am excited about learning new technology. As a web developer, I am more interested in learning how to create websites that are responsive, engaging, and potentially the best in the industry integrating front-end and back-end technologies in order to give users a memorable experience.
          </p>

          <p className="p-2 text-gray-300 text-justify">
            Also , you may view my project below.
            <br /> Thanks.
          </p>

          <br />
          <Link href="/#projects">
            <i
              className="p-2 text-slate-400 cursor-pointer"
              style={{ decoration: "none" }}
            >
              &rarr; Check out some of my latest projects.
            </i>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <p className="p-2 text-gray-300 text-justify">
Hey there, Jayant in the house! I'm an enthusiastic undergraduate
student majoring in Computer Science at ZCOER, SPPU, Pune, India. As
a full-stack web developer, I'm on the hunt for exciting
opportunities to showcase my skills and make a real impact. I have
an insatiable passion for learning and staying up-to-date with the
latest technologies, always ready to adapt and tackle any web
development challenge that comes my way.
</p>
<p className="p-2 text-gray-300 text-justify">
What really gets my heart racing is the chance to create
jaw-dropping, responsive, and interactive websites. I'm constantly
pushing the boundaries of what's possible, leveraging my front-end
and back-end expertise to craft the absolute best digital
experiences for visitors. Trust me, there's nothing more thrilling
than wowing users with seamless designs and immersive interactions.
</p>
<p className="p-2 text-gray-300 text-justify">
So, buckle up and join me on this exhilarating journey. Together,
we'll build exceptional websites that leave a lasting impression.
Get ready to unleash the full potential of technology and make a
significant impact in the world of web development!
</p> */
}
