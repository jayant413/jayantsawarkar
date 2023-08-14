// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import ecommerceImg from "../public/assets/projects/ecommerce_home.png";
import ytImg from "../public/assets/projects/yt.png";
import newsImg from "../public/assets/projects/news.png";
import movixImg from "../public/assets/projects/movix1.png";
import online_compiler from "../public/assets/projects/online_compiler.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="MobiMart"
            backgroundImg={ecommerceImg}
            projectUrl="/ecommerce"
            tech="MERN"
          />
          <ProjectItem
            title="YouTube"
            backgroundImg={ytImg}
            projectUrl="/yt"
            tech="React JS - Vite"
          />
          <ProjectItem
            title="News App"
            backgroundImg={newsImg}
            projectUrl="/news"
            tech="React JS"
          />
          <ProjectItem
            title="Programiz"
            backgroundImg={online_compiler}
            projectUrl="/onlineCompiler"
            tech="MERN"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
