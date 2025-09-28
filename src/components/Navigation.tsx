import { useState } from "react";
import { Menu } from "lucide-react";

const links = [
  { name: "Blog", href: "/", base: "/blog" },
  { name: "Sobre mí", href: "/sobre-mi", base: "/sobre-mi" },
  { name: "Proyectos", href: "/proyectos", base: "/proyectos" },
  { name: "Otras publicaciones", href: "/publicaciones", base: "/publicaciones" },
];

type Props = {
  currentPath: string;
}

export const Navigation = ({ currentPath }: Props) => {

  if (currentPath === "/") {
    currentPath = "/blog";
  };

  const [showMenu, setShowMenu] = useState(false);

  return <nav className="flex mb-6 gap-1 w-full relative">
    <button
      className="md:hidden p-1 rounded-md hover:bg-stone-100 transition-colors duration-100"
      onClick={() => setShowMenu(!showMenu)}
    >
      <Menu className="size-5" />
    </button>
    {
      showMenu && (
        <div className="absolute top-0 mt-10 left-0 bg-white border border-stone-200 rounded-md flex flex-col p-2 gap-1 shadow-md md:hidden">
          {links.filter(link => !currentPath.includes(link.base)).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-gray-700 min-w-max py-1 text-sm rounded-sm px-3 w-fit ${currentPath.includes(link.base)
                ? "font-bold bg-stone-800 text-white"
                : "hover:bg-stone-100 transition-colors duration-100"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )
    }
    {
      links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`text-gray-700 min-w-max py-1 text-sm rounded-sm px-3 w-fit ${currentPath.includes(link.base)
            ? "font-bold bg-stone-800 text-white"
            : "hidden md:block md:hover:bg-stone-100 md:bg-stone-50 md:transition-colors md:duration-100"
            }`}
        >
          {link.name}
        </a>
      ))
    }
  </nav>;
}
