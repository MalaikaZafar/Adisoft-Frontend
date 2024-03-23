import AboutUs from "@/components/sections/AboutUs";
import Footer from "@/components/sections/Footer";
import Functionalities from "@/components/sections/Functionalities";
import NavSection from "@/components/sections/NavSection";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";

const page = () => {
  return (
    <div>
      <NavSection />
      <AboutUs />
      <Services />
      <Pricing />
      <Functionalities />
      <Footer />
    </div>
  );
};

export default page;
