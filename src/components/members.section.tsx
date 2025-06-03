import { motion } from "framer-motion";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";
import { Description } from "./common/description";
import { useState } from "react";

const members = [
  {
    name: "Lucky Ferdiand",
    role: "CEO, Plesiran",
    description:
      "Working with this team has been a game-changer for our business. Their strategy, execution, and attention to detail were outstanding.",
    image: "/image/client/client-1.png",
  },
  {
    name: "Vijay Harikumar",
    role: "Software Developer",
    description:
      "From start to finish, everything was handled professionally. I'm beyond impressed with the final result and how smoothly everything went.",
    image: "/image/client/vijay.jpg",
  },
  {
    name: "Yustiana",
    role: "Marketing Director",
    description:
      "Truly top-notch service. The designs were sleek, user-friendly, and delivered exactly what we envisioned — if not more.",
    image: "/image/client/client-3.png",
  },
];

const MembersSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative">
      <SectionLayout className="md:pb-10 xl:pb-16">
        <SectionTitle className="text-center">What Our Clients Say</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 relative">
          {members.map((member, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ backgroundColor: "#E0F2FE" }}
              transition={{ duration: 0.3 }}
              className="p-6 flex flex-col overflow-hidden rounded-xl cursor-pointer bg-white shadow-md"
            >
              <motion.div
                animate={
                  hoveredCard === index
                    ? { scale: 1.12, rotate: 2 }
                    : { scale: 1, rotate: 0 }
                }
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                className="mx-auto rounded-full overflow-hidden w-28 h-28 sm:w-32 sm:h-32 border-4 border-white shadow-lg"
              >
                <img
                  className="w-full h-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </motion.div>

              <SectionTitle
                size="md"
                className="text-center mt-6 text-xl sm:text-2xl"
              >
                {member.name}
              </SectionTitle>
              <Description className="text-center text-sm sm:text-base font-semibold mt-2">
                {member.role}
              </Description>
              <Description className="text-center text-sm sm:text-base mt-4 max-w-xs mx-auto">
                {member.description}
              </Description>
            </motion.div>
          ))}

          <img
            className="absolute -top-5 -left-14 hidden md:block"
            src="/image/member-section.svg"
            alt="Decorative quote background"
          />
        </div>

        <div className="w-52 hidden md:block h-52 xl:w-[367px] xl:h-[350px] bg-gray-light absolute right-0 bottom-0 -z-50" />
      </SectionLayout>
    </div>
  );
};

export default MembersSection;
