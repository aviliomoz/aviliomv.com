import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MenuMobile = ({ closeAction }) => {
  return (
    <div className="menu-main__options">
      <button
        onClick={() => closeAction(false)}
        type="button"
        className="menu-main__button--close"
      >
        <IoClose />
      </button>
      <ul>
        <li>
          <Link href={"/about"}>Sobre mí</Link>
        </li>
        <li>
          <Link href={"/projects"}>Proyectos</Link>
        </li>
      </ul>
      <ul>
        <li>
          <div className="menu-contact__icon">
            <FaFacebookF style={{ color: "#142e89" }} />
          </div>
          <Link href="/">Facebook</Link>
        </li>
        <li>
          <div className="menu-contact__icon">
            <FaTwitter style={{ color: "#20a1eb" }} />
          </div>
          <Link href="https://twitter.com/ajmv2000">Twitter</Link>
        </li>
        <li>
          <div className="menu-contact__icon">
            <FaLinkedinIn style={{ color: "#2f79e6" }} />
          </div>
          <Link href="/">LinkedIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
