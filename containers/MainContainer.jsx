import { useRouter } from "next/router";
import MenuContact from "../components/MenuContact";
import MenuMain from "../components/MenuMain";

const MainContainer = ({ children }) => {
  const router = useRouter();

  return (
    <div className="main-container">
      <nav className="layout__nav">
        <MenuMain />
        <MenuContact />
      </nav>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">
        <p>Avilio Muñoz V. - Blog - 2022</p>
      </footer>
    </div>
  );
};

export default MainContainer;
