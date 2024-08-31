import { useState, useEffect } from "react";
import profilePic from "../assets/Hero image.jpeg"; // Replace with the correct path

const Hero = () => {
  const roles = ["Scientist", "Analyst", "Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [roles.length]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Rijul Ugawekar
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Data {roles[currentRoleIndex]}
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I am passionate about working with data and solving real-world problems using my skills. I have worked for a year in an Indian MNC as an Engineer, and apart from academics, I love traveling.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="relative w-full h-full">
            {/* Image Container */}
            <div className="relative">
              <img 
                src={profilePic} 
                alt="Rijul Ugawekar" 
                className="w-full h-full object-cover" 
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;