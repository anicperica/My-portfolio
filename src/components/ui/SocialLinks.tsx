import {  Mail } from "lucide-react";
import GithubIcon from "../svg/Github";
import LinkedinIcon from "../svg/Linkedin";
export default function SocialLinks() {
  return (
    <div className="flex justify-start items-center gap-3">
      <a
        href="https://github.com/anicperica"
        target="blank"
        className="bg-secondary rounded-4xl p-3 hover:bg-customRed hover:scale-110   transition-colors  duration-300"
      >
        <GithubIcon width={25} height={25} className="text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/perica-anic-45290a350/"
        target="blank"
        className="bg-secondary rounded-4xl p-3 hover:bg-customRed hover:scale-110   transition-colors  duration-300"
      >
        <LinkedinIcon width={25} height={25} className="text-white " />
      </a>
      <a
        href="mailto:anicperica18@gmail.com"
        className="bg-secondary rounded-4xl p-3 hover:bg-customRed hover:scale-110   transition-colors  duration-300"
      >
        <Mail width={25} height={25} className="text-white" />
      </a>
    </div>
  );
}
