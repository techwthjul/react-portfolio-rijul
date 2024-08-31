import { SiPython, SiPowerbi, SiTableau, SiApachekafka, SiApachespark, SiMicrosoftexcel, SiRstudio } from "react-icons/si";
import { DiDatabase } from "react-icons/di"; // For SQL, using a generic database icon
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDatabase className="text-7xl text-blue-500" /> {/* SQL */}
          </div>
          <p className="mt-2 text-lg">SQL</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPython className="text-7xl text-yellow-500" /> {/* Python */}
          </div>
          <p className="mt-2 text-lg">Python</p>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPowerbi className="text-7xl text-yellow-600" /> {/* Power BI */}
          </div>
          <p className="mt-2 text-lg">Power BI</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTableau className="text-7xl text-blue-600" /> {/* Tableau */}
          </div>
          <p className="mt-2 text-lg">Tableau</p>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiRstudio className="text-7xl text-blue-400" /> {/* R programming */}
          </div>
          <p className="mt-2 text-lg">R</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiApachekafka className="text-7xl text-orange-500" /> {/* Apache Kafka */}
          </div>
          <p className="mt-2 text-lg">Apache Kafka</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiApachespark className="text-7xl text-orange-400" /> {/* Apache Spark */}
          </div>
          <p className="mt-2 text-lg">Apache Spark</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMicrosoftexcel className="text-7xl text-green-600" /> {/* MS Excel */}
          </div>
          <p className="mt-2 text-lg">MS Excel</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;