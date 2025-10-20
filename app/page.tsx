import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Services from "@/components/services/Services";
import Resume from "@/components/resume/Resume"
import Work from "@/components/work/Work"
import Contact from "@/components/contact/Contact"
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center xl:items-start xl:justify-between xl:pt-50 overflow-visible max-[700px]:top-70 max-[1250px]:top-95">
      
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between gap-2 sm:gap-12 xl:gap-15 relative">
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none relative z-10 px-2 sm:px-0">
          <span className="block text-xs sm:text-base max-[320px]:text-[7px]">
            Software Developer
          </span>

          <h1 className="h1 mb-2 sm:mb-3 text-xl sm:text-4xl max-[320px]:text-[12px]">
            Hello I'm{" "}
            <span className="text-emerald-300 xl:whitespace-nowrap">
              Dada Kingsley
            </span>
          </h1>

          <p className="max-w-[500px] mb-1 sm:mb-9 text-white/80 text-xs sm:text-base mx-auto xl:mx-0 max-[320px]:text-[8px] leading-tight">
            I excel in crafting efficient and scalable software solutions that
            drive innovation and enhanc e user experiences.
          </p>

          <div className="flex flex-col xl:flex-row items-center gap-2 sm:gap-8 justify-center xl:justify-start">
            <Button
              variant="outline"
              size="sm"
              className="uppercase flex items-center gap-1 sm:gap-3 px-2 py-1 sm:px-4 sm:py-3 text-sm sm:text-lg 
                max-[280px]:px-[3px] max-[344px]:py-[1px] max-[280px]:text-[8px]"
            >
              <span>Download CV</span>
              <FiDownload className="text-lg sm:text-2xl max-[344px]:text-[10px]" />
            </Button>

            <div className="mb-2 sm:mb-6 xl:mb-0">
              <Socials
                containerStyles="flex gap-3 sm:gap-6 max-[344px]:gap-[4px]"
                iconstyles="w-10 h-10 sm:w-12 sm:h-12 
                max-[344px]:w-8 max-[344px]:h-8
                border border-emerald-300 
                rounded-full flex justify-center items-center 
                text-emerald-300 
                text-[16px] sm:text-[20px] max-[344px]:text-[12px]
                hover:bg-emerald-300 hover:text-black 
                transition-all duration-500 sm:top-30"
              />
            </div>
          </div>

          {/* Stats integrated into the hero section */}
          <div className="mt-10 w-full flex justify-center xl:justify-start max-[600px] max-[600px]:scale-100">
            <Stats />
          </div>
        </div>

        {/* Right side: Photo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 order-1 xl:static xl:order-none mb-3 sm:mb-8 xl:mb-0 z-0 scale-90 sm:scale-100 max-[280px]:scale-[0.5] min-[400px]:scale-[1.2] min-[700px]:-top-36 min-[280px]:-top-35">
          <Photo />
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="w-full mt-20 sm:mt-28">
        <Services />
      </section>
       <section id="resume" className="w-full mt-20 sm:mt-28">
        <Resume />
      </section>
       <section id="work" className="w-full mt-150 sm:mt-28">
        <Work />
      </section>
        <section id="contact" className="w-full mt-45 sm:mt-28">
        <Contact />
      </section>
        <section id="resume" className="w-full mt-20 sm:mt-28">
        <Footer/>
      </section>


    </section>
  );
};

export default Home;
