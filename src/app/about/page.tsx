'use client'
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundGradient } from "@/components/ui/background-gradient";
function page() {
  return (
    <div className=" ">
     
      <div className=" w-full absolute h-[100%] ">
       
        <div className="content  flex justify-center items-center h-full">
        <BackgroundGradient className=" rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900  ">
          <div>
            <h1 className="text-4xl font-bold mt-2">Developed by-</h1>
            <h1 className="text-2xl font-bold mt-2">Suresh Singh</h1>
            <h1 className="text-lg mt-2">
              Qualification: <i>MCA </i>
            </h1>
            <h1>Role: <i>Full Stack Web Developer</i></h1>
            <br />
            <a
              className="bg-white text-black px-4 py-2 rounded "
              href="https://github.com/SureshSingh80"
              target="_blank"
            >
              Github
            </a>
            <a
              className="bg-white text-black px-4 py-2 rounded ml-2"
              href="https://www.linkedin.com/in/suresh-singh-403b20264 
"
              target="_blank"
            >
              Linkedin
            </a>
            
          </div>
          </BackgroundGradient>
        </div>
        
      </div>
      <Meteors number={20} />
      
    </div>
  );
}

export default page;
