import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Description } from "./common/description";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const serviceData = [
  {
    img: "/image/landing-page.svg",
    title: "High-Impact Landing Pages",
    description:
      "Create custom landing pages that drive conversions and capture leads effectively.",
    tooltip: "Optimized for speed, mobile, and user experience to maximize ROI.",
  },
  {
    img: "/image/email-marketing.svg",
    title: "Automated Email Campaigns",
    description:
      "Engage your audience with strategic and personalized email marketing workflows.",
    tooltip: "Boost open rates, drive traffic, and nurture customer loyalty.",
  },
  {
    img: "/image/ads-marketing.svg",
    title: "Targeted Ads Campaigns",
    description:
      "Launch and manage ad campaigns across Google, Meta, and more with measurable results.",
    tooltip: "Data-driven ad strategies to scale your business profitably.",
  },
];

const getFadeInUp = (i: number) => ({
  hidden: { opacity: 0, y: 30 + i * 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionLayout id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={getFadeInUp(0)}
        className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-0 md:items-center"
      >
        <div className="space-y-2 lg:space-y-3">
          <SectionTitle>Professional Marketing</SectionTitle>
          <SectionTitle>Services You Can Trust</SectionTitle>
        </div>
        <Description className="max-w-[324px] md:max-w-[240px] lg:max-w-[357px] xl:max-w-[387px]">
          Elevate your digital presence with proven strategies tailored for growth.
        </Description>
      </motion.div>

      <div className="flex w-full xl:justify-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-[122px] mt-16 xl:max-w-[1080px]"
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={getFadeInUp(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col items-start text-start group p-6 rounded-2xl border border-transparent bg-white hover:bg-gradient-to-br from-indigo-100 via-white to-purple-100 transition-all duration-500 shadow-md hover:shadow-2xl"
              whileHover={{
                scale: 1.05,
                rotateX: 1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >

              <motion.img
                src={service.img}
                alt={service.title}
                className="w-[61px] h-[61px]"
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                  transition: { duration: 0.3 },
                }}
              />


              <SectionTitle size="md" className="mt-[20px]">
                {service.title}
              </SectionTitle>


              <Description className="mt-[10px] max-w-[240px] md:max-w-full">
                {service.description}
              </Description>


              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    transition={{ duration: 0.25, type: "spring" }}
                    className="absolute bottom-full left-0 mb-3 z-50 bg-black text-white text-sm p-3 rounded-lg shadow-lg w-[240px] pointer-events-none"
                  >
                    {service.tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default ServiceSection;
