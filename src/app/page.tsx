import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Skills from "./components/Skills";

const page = () => {
  return (
    <>
      <Header />
      <Description />
      <Aboutme />
      <Services />
      <Skills />
      <Contactme />
      <Footer />
    </>
  );
};

export default page;
