import { motion } from "framer-motion";
import baliPic from "../assets/Bali, Indonesia.jpeg";
import nycPic from "../assets/NYC1.jpeg";
import picnicPic from "../assets/SRC picnic.jpeg";
import volunteeringPic from "../assets/SRC volunteering.jpeg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="grid grid-cols-2 gap-4">
            <img src={baliPic} alt="Bali, Indonesia" className="rounded-2xl" />
            <img src={nycPic} alt="NYC1" className="rounded-2xl" />
            <img src={picnicPic} alt="SRC picnic" className="rounded-2xl" />
            <img src={volunteeringPic} alt="SRC volunteering" className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
            I'm a second-year Master's student at Syracuse University, New York, specializing in Information Systems with a focus on Data Science. My journey in education began at the University of Mumbai, where I earned my Bachelor of Engineering degree. This summer was a whirlwind of experiences – I had the incredible opportunity to volunteer at various events with the Office of Pre-College Programs, enriching my connection with the community. Additionally, I explored the vibrant culture and stunning landscapes of Indonesia, fueling my passion for travel.

Currently, I'm working as a Teaching Assistant at the Whitman J. Martin School of Management, where I assist in guiding the next generation of business leaders. As I look ahead, I'm excitedly seeking Fall Co-op opportunities in Data Science or Project Management, eager to apply my skills and continue growing in the field.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;