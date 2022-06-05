import MenuContact from "../components/MenuContact";
import MenuMain from "../components/MenuMain";

const MainContainer = ({ children }) => {
  return (
    <div className="main-container">
      <nav className="layout__nav">
        <MenuMain />
        <MenuContact />
      </nav>
      <main className="layout__main">{children}</main>
      {/* <footer className="layout__footer" style={{ zIndex: "10000" }}>
        <p>Avilio Muñoz V. - Blog - 2022</p>
      </footer> */}
    </div>
  );
};

export default MainContainer;
