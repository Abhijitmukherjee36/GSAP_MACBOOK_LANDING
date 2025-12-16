import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
      <div>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
      </div>
  )
}

export default App
