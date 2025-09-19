import GithubIcon from "../../svg/Github";
import { Download } from "lucide-react";
import NavLinks from "../../ui/NavLinks";
export default function MenuCard() {
  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "Projects", id: "#projects" },
    { name: "Skills", id: "#skills" },
    { name: "Jokes", id: "#jokes" },
    { name: "Contact", id: "#contact" },
  ];
  return (
    <div className="absolute w-full flex flex-col justify-center items-start px-5 border-b border-secondary  top-14 left-0 bg-primary md:hidden  ">
      <NavLinks
        className="flex w-full flex-col gap-3 pb-3 text-white  "
        links={navLinks}
      />
      <div className="flex w-full justify-between items-center py-5 border-t border-secondary ">
        <div className="flex justify-center items-center  text-white">
          <a
            className="flex gap-1"
            href="https://github.com/anicperica"
            target="blank"
          >
            <GithubIcon className="text-white " width={25} height={25} />
            <p>GitHub</p>
          </a>
        </div>
        <div className="flex   border border-secondary py-1 px-2 rounded-lg text-white hover:bg-customRed">
          <a
            className="flex justify-center items-center gap-2"
            href="/public/AnićPerica_CV.pdf"
            download
          >
            <Download color="white" width={20} height={18} />
            <h1>CV</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
