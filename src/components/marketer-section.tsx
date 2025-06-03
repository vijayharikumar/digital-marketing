import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "../hooks/useCountUp";
import { Description } from "./common/description";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const MarketerSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const awardCount = useCountUp(145, 0, 2000, inView);
  const winnerCount = useCountUp(98, 0, 2000, inView);
  const experienceCount = useCountUp(7, 0, 2000, inView);
  const clientCount = useCountUp(1000, 0, 2000, inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <SectionLayout
      id="marketings"
      className="mr-0 md:max-w-[736px] lg:max-w-[982px] xl:max-w-[1341px]"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="w-full flex flex-col md:flex-row justify-between gap-16 md:gap-10 xl:gap-36"
      >

        <div className="max-w-[444px]">
          <div className="space-y-3 md:space-y-2 lg:space-y-3">
            <SectionTitle>Top-Rated</SectionTitle>
            <SectionTitle>Digital Marketer</SectionTitle>
          </div>
          <Description className="text-lg mt-7 md:mt-2 lg:mt-5">
            Helping brands grow with conversion-focused campaigns, impactful strategies,
            and real results. From startups to enterprises, I’ve delivered.
          </Description>
        </div>

      
        <div className="w-full flex justify-between gap-10 xl:gap-40">
          <div className="w-full grid grid-cols-2 gap-10 xl:gap-20">
   
            <motion.div
              className="text-center md:text-start"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <SectionTitle>{awardCount}</SectionTitle>
              <div className="mt-3 space-y-1">
                <Description>Awards</Description>
                <Description>Recognized Excellence</Description>
              </div>
            </motion.div>

           
            <motion.div
              className="text-center md:text-start"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <SectionTitle>{winnerCount}</SectionTitle>
              <div className="mt-3 space-y-1">
                <Description>Campaigns Won</Description>
                <Description>High-Performance Projects</Description>
              </div>
            </motion.div>

   
            <motion.div
              className="text-center md:text-start"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <SectionTitle>{experienceCount}</SectionTitle>
              <div className="mt-3 space-y-1">
                <Description>Years of Experience</Description>
                <Description>Strategic Expertise</Description>
              </div>
            </motion.div>

     
            <motion.div
              className="text-center md:text-start"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <SectionTitle>{clientCount}+</SectionTitle>
              <div className="mt-3 space-y-1">
                <Description>Global Clients</Description>
                <Description>Handled & Grown</Description>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-[200px] hidden md:block lg:w-[500px] h-full lg:h-[357px] bg-gray-100 relative -top-5 rounded-xl shadow-xl overflow-hidden"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
          
            <motion.img
              src="Text-Book.avif"
              alt="Banner Design"
              className="w-full h-full object-cover rounded-xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>


        </div>
      </motion.div>
    </SectionLayout>
  );
};

export default MarketerSection;
