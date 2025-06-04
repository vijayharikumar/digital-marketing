import { motion } from "framer-motion";
import { SectionTitle } from "./common/section-title";
import SectionLayout from "./common/section-layout";
import { Description } from "./common/description";
import { Button } from "./common/button";

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const PortfolioSection = () => {
  return (
    <SectionLayout
      className="mr-0 px-0 md:max-w-[736px] lg:max-w-[982px] xl:max-w-[1341px]"
      id="portfolio"
    >
      <div className="grid-cols-1 md:grid-cols-12 grid gap-10" id="portfolio">

        <div className="xl:col-span-4 md:col-span-5 col-span-1">
          <div className="px-6 md:px-0 w-full h-full flex flex-col justify-center items-start">
            <div className="space-y-3 md:space-y-2 lg:space-y-3">
              <SectionTitle>Creative</SectionTitle>
              <SectionTitle>Portfolio</SectionTitle>
            </div>
            <Description className="text-lg max-w-72 mt-5">
              Explore a curated selection of landing pages designed to drive results. Clean UI, strong UX, and conversion-focused layouts.
            </Description>
            <Button className="mt-10 md:mt-5 lg:mt-11" variant="primary" size="lg">
              See more
            </Button>
          </div>
        </div>

        <div className="xl:col-span-8 md:col-span-7 col-span-1 grid gap-5">
          <div className="grid grid-cols-12 gap-5">
            {[1, 2].map((id, i) => (
              <motion.div
                key={id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
                className="col-span-6 md:col-span-5"
              >
                <motion.div
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full bg-neutral-200 h-44 lg:h-64 rounded-lg md:rounded-[10px] overflow-hidden"
                >
                  <img
                    style={{ cursor: "pointer" }}
                    className="w-full h-full object-cover"
                    src={`/image/portfolio/image-${id}.png`}
                    alt={`Project ${id}`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-5">
            {[
              { id: 3, col: "col-span-8 md:col-span-5" },
              { id: 4, col: "col-span-4 md:col-span-7" },
            ].map((img, i) => (
              <motion.div
                key={img.id}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
                className={img.col}
              >
                <motion.div
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full bg-neutral-200 h-44 lg:h-64 rounded-lg md:rounded-[10px] overflow-hidden"
                >
                  <img
                    style={{ cursor: "pointer" }}
                    className="w-full h-full object-cover"
                    src={`/image/portfolio/image-${img.id}.png`}
                    alt={`Project ${img.id}`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PortfolioSection;
