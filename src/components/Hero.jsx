import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[170px] justify-center align-middle max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-40 violet-gradient" />
        </div>
        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className="text-[#915eff] ">Birappan</span>
          </h3>

          <p className={`${styles.heroSubText} text-white flex`}>
            I'm&nbsp;
            <span>
              <Typewriter
                options={{
                  strings: [
                    "a FullStack Developer",
                    "a Problem Solver",
                    "a Mechanical Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute sm:bottom-12 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
