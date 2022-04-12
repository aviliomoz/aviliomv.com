import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const MenuContact = () => {
  return (
    <section className="menu-contact">
      <h4>Contacto</h4>
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
    </section>
  );
};

export default MenuContact;
