
import { ArrowDown } from "lucide-react";
import profilePicture from "../assets/ProfilePicture.jpg";
import HeroBackground from "./ui/HeroBackground";
import SocialLinks from "./ui/SocialLinks";
export default function HeroSection() {
  return (
    <section className="relative  flex w-full min-h-screen bg-primary items-start justify-start">
      <HeroBackground />
      <div className="relative z-10 flex flex-col   w-full px-5 pt-15 text-white md:pl-25 md:pr-40 md:flex-row  md:justify-between ">
        <div>
          <p className="text-customRed">HELLO, I'M</p>
          <div className="flex flex-col jusitfy-center items-start py-5">
            <h1 className="text-4xl md:text-[70px]">Perica Anić</h1>
            <h1 className="text-customRed text-4xl md:text-[70px]">
              Developer
            </h1>
          </div>
          <p className="text-gray-400 text-xl max-w-xl">
            Entry-level software developer passionate about creating innovative
            solutions and bringing ideas to life through code. Ready to make my
            mark in the tech world.
          </p>
          <div className="flex items-center gap-10 py-10 font-bold">
            <div className=" relative flex justify-center items-center hover:scale-110 transition-all duration-300">
              <button className="bg-customRed pl-4 pr-10 py-3 rounded-xl ">
                View My Work
              </button>
              <ArrowDown className="absolute right-2  text-white " />
            </div>
            <button className="border border-secondary rounded-xl py-3 px-3 hover:scale-110 transition-all duration-300">
              Let's Connect
            </button>
          </div>
          <SocialLinks/>
        </div>
        <div className="flex justify-center pt-10 hover:scale-105   transition-all  duration-500">
          <img
            src={profilePicture}
            alt="profilePicture"
            className=" flex   w-80 h-80 rounded-full border-4 border-customRed  shadow-redGlow  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
