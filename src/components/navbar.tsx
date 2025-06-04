import { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setShowNavbar(false);
      }
      if (currentScrollY === 0) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        } fixed md:top-[30px] lg:top-[50px] left-0 w-full z-[99999999]`}
    >
      <div className="mx-auto md:max-w-[670px] lg:max-w-[900px] xl:max-w-[1200px] px-4">
        <div className="bg-white/80 backdrop-blur-md border border-white/30 shadow-lg rounded-full overflow-hidden transition-all duration-500">
          <div className="h-[80px] md:h-[54px] lg:h-[62px] xl:h-[68px] transform md:-skew-x-[30deg]">
            <div className="w-full h-full px-[20px] lg:px-[50px] md:skew-x-[30deg] flex justify-between md:justify-start items-center gap-[25px] lg:gap-[40px] xl:gap-[60px]">

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden"
                onClick={() => setIsOpenMobileMenu((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                >
                  <path
                    d="M41.9091 19H20.0909C19.4897 19 19 19.9119 19 21.0315C19 22.1511 19.4897 23.063 20.0909 23.063H41.9091C42.5103 23.063 43 22.1511 43 21.0315C43 19.9119 42.5103 19 41.9091 19Z"
                    fill="black"
                  />
                  <path
                    d="M41.9091 29.1196H20.0909C19.4897 29.1196 19 30.0315 19 31.1511C19 32.2707 19.4897 33.1826 20.0909 33.1826H41.9091C42.5103 33.1826 43 32.2707 43 31.1511C43 30.0315 42.5103 29.1196 41.9091 29.1196Z"
                    fill="black"
                  />
                  <path
                    d="M41.9091 38.937H20.0909C19.4897 38.937 19 39.8489 19 40.9685C19 42.0881 19.4897 43 20.0909 43H41.9091C42.5103 43 43 42.0881 43 40.9685C43 39.8489 42.5103 38.937 41.9091 38.937Z"
                    fill="black"
                  />
                </svg>
              </button>

              {/* Nav Links + Email */}
              <div
                className={`${isOpenMobileMenu ? "flex" : "hidden md:flex"
                  } py-8 md:py-0 absolute md:relative top-24 md:top-0 bg-black md:bg-transparent left-0 
                flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-full md:rounded-full`}
              >
                <nav className="flex flex-col md:flex-row gap-5 justify-start items-center md:gap-[25px] lg:gap-[40px] xl:gap-[60px] text-[18px] md:text-[16px] lg:text-[18px] tracking-[0.5px] font-semibold leading-normal">
                  {["home", "services", "marketings", "portfolio", "clients", "contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      className="text-primary relative group hover:text-indigo-600 transition duration-300"
                    >
                      <span className="animated-underline">
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </span>
                    </a>
                  ))}
                </nav>

                {/* Get in touch Button */}
                <a href="#getintouch" className="inline-block mt-4 md:mt-0">
                  <button
                    className="ml-5 bg-secondary w-[160px] md:w-[120px] lg:w-[170px] xl:w-[240px] h-[36px] lg:h-[44px] text-white text-[16px] md:text-[14px] lg:text-[16px] font-bold leading-[120%] transition-all duration-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.4)] hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full flex items-center justify-center"
                  >
                    Get In Touch
                  </button>
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
