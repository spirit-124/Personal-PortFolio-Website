import React from "react";

// images
import Image from "../assets/avatar.svg";

//icons
import { FaGithub, FaYoutube, Fadribble } from "react-icons/fa";

//type-animation
// import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          {/* text  */}
          <div>
            <h1>
              BEN <span>AIDEN</span>
            </h1>
          </div>
          {/* images  */}
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
