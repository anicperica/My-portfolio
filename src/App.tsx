import Navbar from "./components/layout/navbar/Navbar";
import HeroSection from "./components/HeroSection";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <div className=" flex flex-col w-full">
        <Navbar />
        <HeroSection/>
      </div>
    </>
  );
}

export default App;
