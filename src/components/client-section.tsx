import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";
import "./client-section.css";
const ClientSection = () => {
  return (
    <div className="relative overflow-hidden" id="clients">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] z-0" />


      <div className="absolute inset-0 bg-[url('/image/pattern.svg')] opacity-5 z-0" />

      <SectionLayout className="md:py-20 relative z-10">
        <SectionTitle className="text-center">
          Client <br className="md:hidden" /> Handled
        </SectionTitle>

        <div className="mt-16 lg:mt-20 space-y-10">
          <div className="relative overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex gap-20">
              {Array(2)
                .fill([
                  "/image/client/lokapin.svg",
                  "/image/client/tuenhub.svg",
                  "/image/client/v-point.svg",
                  "/image/client/cure.svg",
                ])
                .flat()
                .map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Client Logo"
                    className="w-[120px] lg:w-[183px] lg:h-[107px] shrink-0 brightness-95 hover:brightness-110 transition duration-300"
                  />
                ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default ClientSection;
