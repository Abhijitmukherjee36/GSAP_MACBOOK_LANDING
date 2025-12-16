import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Showcase from "./components/Showcase";
gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
      <div>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
      </div>
  )
}

export default App
