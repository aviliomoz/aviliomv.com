import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const MenuContact = () => {
  return (
    <section className="menu-contact">
      <h4>Contacto</h4>
      <ul>
        <li>
          <div className="menu-contact__icon">
            <FaFacebookF style={{ color: "#142e89" }} />
          </div>
          <Link href="https://www.facebook.com/avilio.vilchez">Facebook</Link>
        </li>
        <li>
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
          <Link href="https://www.linkedin.com/in/avilio-mu%C3%B1oz-vilchez-173672237/">
            LinkedIn
          </Link>
        </li>
        <li>
          <div className="menu-contact__icon">
            <FaEnvelope style={{ color: "#cbd5e1" }} />
          </div>
          <Link href="mailto:ajmv2000@gmail.com">Email</Link>
        </li>
      </ul>
    </section>
  );
};

export default MenuContact;
