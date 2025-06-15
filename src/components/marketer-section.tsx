import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "../hooks/useCountUp";
import { Description } from "./common/description";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const cardFade = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const MarketerSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const awardCount = useCountUp(145, 0, 2000, inView);
  const winnerCount = useCountUp(98, 0, 2000, inView);
  const experienceCount = useCountUp(7, 0, 2000, inView);
  const clientCount = useCountUp(1000, 0, 2000, inView);

  const stats = [
    {
      count: awardCount,
      title: "Awards",
      subtitle: "Recognized Excellence",
    },
    {
      count: winnerCount,
      title: "Campaigns Won",
      subtitle: "High-Performance Projects",
    },
    {
      count: experienceCount,
      title: "Years of Experience",
      subtitle: "Strategic Expertise",
    },
    {
      count: `${clientCount}+`,
      title: "Global Clients",
      subtitle: "Handled & Grown",
    },
  ];

  return (
    <SectionLayout
      id="marketings"
      className="mr-0 md:max-w-[736px] lg:max-w-[982px] xl:max-w-[1341px]"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full flex flex-col md:flex-row justify-between gap-16 md:gap-10 xl:gap-36"
      >
        {/* Left Text */}
        <motion.div
          className="max-w-[444px]"
          variants={cardFade}
          custom={0}
        >
          <div className="space-y-3 md:space-y-2 lg:space-y-3">
            <SectionTitle>Top-Rated</SectionTitle>
            <SectionTitle>Digital Marketer</SectionTitle>
          </div>
          <Description className="text-lg mt-7 md:mt-2 lg:mt-5">
            Helping brands grow with conversion-focused campaigns, impactful strategies,
            and real results. From startups to enterprises, I’ve delivered.
          </Description>
        </motion.div>

        {/* Right Stats Grid */}
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="grid grid-cols-2 gap-6 lg:gap-10 xl:gap-16 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={cardFade}
                className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-lg text-center md:text-start hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
              >
                <SectionTitle className="text-indigo-700 text-4xl">
                  {stat.count}
                </SectionTitle>
                <div className="mt-3 space-y-1">
                  <Description className="font-semibold">{stat.title}</Description>
                  <Description>{stat.subtitle}</Description>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banner Image */}
          <motion.div
            className="w-[220px] hidden md:block lg:w-[500px] h-full lg:h-[357px] bg-gray-100 relative -top-5 rounded-xl shadow-xl overflow-hidden"
            variants={cardFade}
            custom={stats.length + 1}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.img
              src="Text-Book.png"
              alt="Banner Design"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </SectionLayout>
  );
};

export default MarketerSection;
