import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
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
        <li onClick={() => closeAction(false)}>
          <Link href={"/about"}>Sobre mí</Link>
        </li>
        <li onClick={() => closeAction(false)}>
          <Link href={"/projects"}>Proyectos</Link>
        </li>
      </ul>
      <ul>
        <li onClick={() => closeAction(false)}>
          <div className="menu-contact__icon">
            <FaFacebookF style={{ color: "#142e89" }} />
          </div>
          <Link href="https://www.facebook.com/avilio.vilchez">Facebook</Link>
        </li>
        <li onClick={() => closeAction(false)}>
          <div className="menu-contact__icon">
            <FaTwitter style={{ color: "#20a1eb" }} />
          </div>
          <Link href="https://twitter.com/aviliomv">Twitter</Link>
        </li>
        <li>
          <div className="menu-contact__icon">
            <FaInstagram style={{ color: "#cd2c80" }} />
          </div>
          <Link href="https://www.instagram.com/aviliomunoz/?hl=es">
            Instagram
          </Link>
        </li>
        <li>
          <div className="menu-contact__icon">
            <FaLinkedinIn style={{ color: "#2f79e6" }} />
          </div>
          <Link
            onClick={() => closeAction(false)}
            href="https://www.linkedin.com/in/avilio-mu%C3%B1oz-vilchez-173672237/"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
