import Link from "next/link";
import { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import MenuMobile from "./MenuMobile";

const MenuMain = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <section className="menu-main">
      <h2>
        <Link href="/">Avilio Muñoz V.</Link>
      </h2>
      <button
        onClick={() => setMenuIsOpen(true)}
        type="button"
        className="menu-main__button"
      >
        <HiMenuAlt3 />
      </button>
      {menuIsOpen && <MenuMobile closeAction={setMenuIsOpen} />}
      <ul className="menu-main__links">
        <li>
          <Link href={"/about"}>Sobre mí</Link>
        </li>
        <li>
          <Link href={"/projects"}>Proyectos</Link>
        </li>
      </ul>
    </section>
  );
};

export default MenuMain;
