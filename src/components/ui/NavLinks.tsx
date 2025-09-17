interface NavLink {
  name: string;
  id: string;
}
interface NavLinksProps {
  links: NavLink[];
  className?: string;
}
export default function NavLinks({ links,className }: NavLinksProps) {
  return (
    
      <ul className={className}>
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.id}
              className="inline-block w-full hover:text-customRed hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    
  );
}
