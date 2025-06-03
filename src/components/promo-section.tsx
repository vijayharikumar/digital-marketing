import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "./common/button";
import { Description } from "./common/description";
import { SectionTitle } from "./common/section-title";

const services = [
  {
    title: "Landing Page",
    img: "/image/icon/page.svg",
    desc: "High-converting landing pages for your product or service.",
    more:
      "Crafted for results, our landing pages combine strong calls-to-action, conversion best practices, and stunning UI to drive user engagement.",
  },
  {
    title: "Email Marketing",
    img: "/image/icon/email-merketin.svg",
    desc: "Reach your audience with impactful email campaigns.",
    more:
      "Get industry-leading open rates with our tailored emails. We help you build campaigns that inform, engage, and convert.",
  },
  {
    title: "Ads Marketing",
    img: "/image/icon/ads-marketing.svg",
    desc: "Boost traffic and conversions with effective ads.",
    more:
      "We plan, run, and analyze ad campaigns across Google, Facebook, and more to bring high-ROI visibility to your brand.",
  },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } },
};

const PromoSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 w-full px-4 bg-gradient-to-br from-purple-50 to-pink-50 relative z-10">
      <div className="max-w-[1245px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
 
        <div className="bg-white shadow-xl rounded-2xl px-8 py-10 w-full lg:w-[58%] flex flex-col gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-4 bg-white/90 rounded-xl cursor-pointer hover:shadow-md transition"
              onClick={() => setSelectedService(index)}
            >
              <img src={item.img} alt={item.title} className="w-14 h-14" />
              <div className="flex justify-between items-start w-full">
                <div>
                  <SectionTitle size="sm">{item.title}</SectionTitle>
                  <Description className="text-sm mt-1 text-gray-600 max-w-[280px]">
                    {item.desc}
                  </Description>
                </div>
                <svg
                  className="hidden md:block mt-1 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                >
                  <path
                    d="M2 2L12 11.2593L2 22"
                    stroke="#6B21A8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl p-10 lg:p-12 w-full lg:w-[40%] shadow-2xl"
        >
          <SectionTitle className="text-white">
            Get special promo today only
          </SectionTitle>
          <Description className="text-white mt-5 text-base max-w-[320px]">
            Limited-time discounts for premium marketing services. Let's
            skyrocket your brand!
          </Description>
          <a href="mailto:vijayharikumar02@gmail.com">
            <Button
              size="lg"
              variant="secondary"
              className="mt-8 hover:scale-105 transition-transform"
            >
              Email me
            </Button>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService !== null && (
          <>

            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            <motion.div
              className="fixed top-1/2 left-1/2 w-[90%] max-w-md md:max-w-xl transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 z-40 shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              style={{
                marginLeft: "-326px",
                marginTop: "-200px"
              }}
              exit="exit"
            >
              <div className="flex justify-between items-start">
                <div>
                  <SectionTitle>{services[selectedService].title}</SectionTitle>
                  <Description className="text-gray-700 mt-2">
                    {services[selectedService].more}
                  </Description>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xl text-gray-500 hover:text-gray-700 ml-4"
                >
                  &times;
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section >
  );
};

export default PromoSection;
