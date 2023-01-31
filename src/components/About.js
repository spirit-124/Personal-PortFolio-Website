import React from "react";
// Countup
import CountUp from "react-countup";
// IntersectionObserver
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* img  */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text  */}
          <div className="text"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
