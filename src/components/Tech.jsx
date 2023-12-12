import React from "react";
import { BallCanvas } from "./canvas";
import { sectionWrapper } from "../hoc";
import { technologies } from "../data/info";
import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What do I know</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Tech, "tech");
