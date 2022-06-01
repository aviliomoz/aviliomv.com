import MainContainer from "./MainContainer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <MainContainer>{children}</MainContainer>
    </div>
  );
};
export default Layout;
