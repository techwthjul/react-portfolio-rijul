import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "Jan 2024 – Present",
    role: "Teaching Assistant – BUA 474",
    company: "Martin J. Whitman School of Management, Syracuse University, NY",
    description: `Co-developed course curriculum for a batch of 30 students studying in the United Kingdom, 
    emphasizing practical data management skills like SQL. Led student projects on data migration, offering hands-on 
    experience with Excel to resolve business data challenges. Orchestrated student-startup partnerships, ensuring 
    alignment of academic projects with real-world applications, and mentored students on data management tools 
    and project management, enhancing their industry readiness.`,
    technologies: ["SQL", "Excel", "Data Management", "Project Management"],
  },
  {
    year: "Jul 2022 – Jun 2023",
    role: "Engineer - Cloud and Infrastructure Services",
    company: "LTIMindtree, Bangalore, IN",
    description: `Utilized Linux and Unix commands to enhance BFS Middleware, achieving a 40% improvement in 
    issue resolution tracked through ServiceNow. Strengthened cloud server performance by 25% with proactive 
    Linux/Unix system monitoring and ServiceNow ticket management. Orchestrated efficient weekly updates for 
    clients, with a 30% boost in efficiency facilitated by Linux management and ServiceNow coordination.`,
    technologies: ["Linux", "Unix", "ServiceNow", "Cloud Infrastructure"],
  },
  {
    year: "Jul 2021 – Sep 2021",
    role: "Technical Intern - Web Development",
    company: "Cloud Counselage, Mumbai, IN",
    description: `Led React development, boosting user experience and site traffic by 30%. Created customizable 
    resume templates, increasing user engagement by 25%. Merged HTML, JavaScript, CSS with React, enhancing 
    design efficiency by 15%. Drove team projects, achieving a 20% boost in cross-platform performance.`,
    technologies: ["React", "HTML", "JavaScript", "CSS"],
  },
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;