import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// Services data

const services = [
  {
    name: "UI/UX Design",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facere ut illo unde voluptates iusto omnis atque maiores, perspiciatis quas modi nobis. Modi repudiandae nam adipisci eligendi reiciendis, accusamus exercitationem!",
    link: "Learn More",
  },
  {
    name: "Development",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facere ut illo unde voluptates iusto omnis atque maiores, perspiciatis quas modi nobis. Modi repudiandae nam adipisci eligendi reiciendis, accusamus exercitationem!",
    link: "Learn More",
  },
  {
    name: "Digital Marketing",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facere ut illo unde voluptates iusto omnis atque maiores, perspiciatis quas modi nobis. Modi repudiandae nam adipisci eligendi reiciendis, accusamus exercitationem!",
    link: "Learn More",
  },
  {
    name: "Product Branding",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facere ut illo unde voluptates iusto omnis atque maiores, perspiciatis quas modi nobis. Modi repudiandae nam adipisci eligendi reiciendis, accusamus exercitationem!",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row">
          {/* text & Image  */}
          <div className=" flex-1 lg:bg-services lg:bg-bottom bg-no-repeat             mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="text-accent h2 mb-6">What I Do</h2>
            <h3 className=" h3 max-w-[455px] mb-16">
              I'm a Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">see my work</button>
          </div>
          {/* services  */}
          <div className="flex-1">
            {/* services-list  */}
            <div>
              {services.map((service, index) => {
                // destructure services
                const [name, description, link] = services;
                return (
                  <div>
                    <div>
                      <h4>{name}</h4>
                    </div>
                    <div>links</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
