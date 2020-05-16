import React, { useEffect } from "react";
import HeaderInfo from "../HeaderInfo";
import Header from "../Header";
import Footer from "../Footer";
import { Main, Content } from "./styles";

interface MainProps {}
const MainComponent: React.FC<MainProps> = ({ children }): JSX.Element => {
  return (
    <Main>
      <HeaderInfo />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};
export default MainComponent;
