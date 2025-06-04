import { motion } from "framer-motion";
import { SectionTitle } from "./common/section-title";
import Navbar from "./navbar";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <div className="w-full" id="home">
      {/* Navbar */}
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="z-50 relative"
      >
        <Navbar />
      </motion.div>

      {/* Fullscreen Gradient Background */}
      <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white">

        {/* Blurred Glow Element (positioned without causing scroll) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] translate-x-1/2 -translate-y-1/2 bg-cyan-500/30 rounded-full blur-[120px]" />
        </div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40 flex flex-col lg:flex-row items-center justify-between"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div variants={fadeInUp} className="text-[28px] lg:text-[32px] xl:text-[36px] font-extrabold tracking-tight">
              Hello, I am Vijay Harikumar
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SectionTitle size="xl" className="text-white font-extrabold">
                Your Digital Marketer
              </SectionTitle>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-lg text-base lg:text-lg text-gray-300 leading-relaxed"
            >
              I help businesses grow online through smart, scalable marketing
              strategies. Let’s build your digital presence the right way.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-4">
              {/* Email Button */}
              <a
                href="mailto:loremipsum@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold bg-secondary text-white rounded-full shadow-lg transition-all duration-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.4)] hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 text-[16px]"
              >
                📩 Email Us
              </a>

              {/* Download CV Button */}
              <a
                download
                href="/Vijay-CV.pdf"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold bg-secondary text-white rounded-full shadow-lg transition-all duration-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.4)] hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 text-[16px]"
              >
                ⬇️ Download CV
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            variants={zoomIn}
            className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/10">
              <img
                style={{ cursor: "pointer" }}
                src="/digital-marketer.jpg"
                alt="Vijay the digital marketer"
                className="w-[320px] lg:w-[400px] xl:w-[450px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
