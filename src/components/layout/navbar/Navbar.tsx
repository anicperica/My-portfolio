import { useState } from "react";
import GithubIcon from "../../svg/Github";
import { Download, Menu, X } from "lucide-react";
import NavLinks from "../../ui/NavLinks";
import MenuCard from "./MenuCard";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "Projects", id: "#projects" },
    { name: "Skills", id: "#skills" },
    { name: "Jokes", id: "#jokes" },
    { name: "Contact", id: "#contact" },
  ];
  return (
    <div className=" relative z-50 flex w-full py-3 px-5 md:px-25 justify-between items-center border-b border-gray-600 bg-primary">
      <div>
        <h1 className="text-customRed text-2xl  hover:scale-105 transition-transform duration-300">
          &lt;Dev/&gt;
        </h1>
      </div>
      <div className=" hidden md:flex text-white">
        <NavLinks className="flex gap-7 p-4 text-lg" links={navLinks} />
      </div>
      <div className=" hidden md:flex justify-center  items-center gap-3">
        <a href="https://github.com/anicperica" target="blank">
          <GithubIcon
            className="text-white hover:text-customRed hover:scale-110   transition-colors  duration-300 "
            width={25}
            height={25}
          />
        </a>
        <div className="flex justify-center items-center  border border-customRed/30 bg-customRed/20 py-1 px-2 rounded-lg text-white hover:bg-customRed">
          <a className="flex gap-3" href="/public/AnićPerica_CV.pdf" download>
            <Download color="white" width={20} height={18} />
            <h1>CV</h1>
          </a>
        </div>
      </div>
      <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <Menu className="text-white " width={20} height={20} />
        )}
      </button>
      {isOpen && <MenuCard />}
    </div>
  );
}
