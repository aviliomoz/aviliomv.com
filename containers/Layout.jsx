import { useRouter } from "next/router";
import MenuContact from "../components/MenuContact";
import MenuMain from "../components/MenuMain";
import MenuTags from "../components/MenuTags";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="layout">
      <nav className="layout__nav">
        <MenuMain />
        {router.pathname === "/" && <MenuTags />}
        <MenuContact />
      </nav>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">
        <p>Avilio Muñoz V. - Blog - 2022</p>
      </footer>
    </div>
  );
};
export default Layout;
