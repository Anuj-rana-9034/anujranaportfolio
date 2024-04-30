import Aboutme from "./components/Aboutme"
import Description from "./components/Description"
import Header from "./components/Header"
import Services from "./components/Services"
import Skills from "./components/Skills"


const page = () => {
  return (
    <>
    <Header/>
    <Description/>
    <Aboutme/>
    <Services/>
    <Skills/>
    </>
  )
}

export default page