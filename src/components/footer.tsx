import { motion } from "framer-motion";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Footer = () => {
  return (
    <div className="bg-footer-bg text-white scroll-smooth">
      <SectionLayout className="py-12 md:py-16" id="contact">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-semibold flex flex-col md:flex-row justify-start items-start md:items-center gap-8 md:gap-16"
        >
          <motion.div variants={fadeInUp} className="md:hidden">
            <SectionTitle className="text-white font-extrabold">
              Digital Marketer Expert
            </SectionTitle>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 text-lg md:text-[18px] md:flex justify-start items-center gap-x-16 gap-4 md:gap-10"
            variants={fadeInUp}
          >
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "Marketings", id: "marketings" },
              { label: "Portfolio", id: "portfolio" },
              { label: "Clients", id: "clients" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition duration-300 hover:text-secondary hover:underline underline-offset-4"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.h1
            className="hidden md:block text-4xl xl:text-5xl font-extrabold max-w-[540px] leading-snug"
            variants={fadeInUp}
          >
            Digital Marketer Expert
          </motion.h1>

          <motion.div
            className="w-full text-base md:text-lg font-medium tracking-wide flex gap-10"
            variants={fadeInUp}
          >
            <div className="space-y-4 min-w-[140px]">
              <p className="text-secondary">Services</p>
              <p>Landing Page</p>
              <p>Email Marketing</p>
              <p>Ads Marketing</p>
            </div>
            <div className="space-y-4">
              <p className="text-secondary">Contact</p>
              <p className="hidden md:block">vijayharikumar02@gmail.com</p>
              <p className="md:hidden">Email</p>
              <p>+91 8870440302</p>
              <a
                href="https://www.linkedin.com/in/vijay-harikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline break-all"
              >
                linkedin.com/in/vijay-harikumar/
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-[220px] mt-10 rounded-lg overflow-hidden border border-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.453488689892!2d78.44717431533449!3d10.815309092294251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005be22f09ed2f%3A0x85fca38ed348a5b4!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717229302290!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-none"
          ></iframe>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left text-sm md:text-base font-semibold mt-10"
        >
          © 2025 Marketing Design. All rights reserved.
        </motion.p>
      </SectionLayout>
    </div>
  );
};

export default Footer;
