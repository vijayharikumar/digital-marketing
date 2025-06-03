import { motion } from "framer-motion";
import { Description } from "./common/description";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const cardVariants = {
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

const ContactSection = () => {
  const contactData = [
    {
      icon: "/image/icon/call.svg",
      title: "Call",
      value: "+91 8870440302",
    },
    {
      icon: "/image/icon/email.svg",
      title: "Email",
      value: "vijayharikumar02@gmail.com",
    },
    {
      icon: "/image/icon/map.svg",
      title: "Location",
      value: "Chennai, India",
    },
  ];

  return (
    <SectionLayout>
      <SectionTitle className="text-center">
        Let’s talk <br className="md:hidden" /> with me
      </SectionTitle>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 lg:mt-20 gap-10 lg:gap-28">
        {contactData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              background: "linear-gradient(135deg, #f0f4ff, #e5e7fb)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.08)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="flex flex-col md:flex-row justify-start items-center md:items-start gap-3 bg-white rounded-xl p-6 shadow-sm cursor-pointer transition-colors duration-300"
          >
            <img
              className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300"
              src={item.icon}
              alt={item.title}
            />
            <div className="text-center md:text-start">
              <SectionTitle size="md" className="text-xl md:text-2xl text-gray-800">
                {item.title}
              </SectionTitle>
              <Description className="text-gray-600 text-lg md:text-sm lg:text-lg">
                {item.value}
              </Description>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
