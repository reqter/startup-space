import React, { useEffect } from "react";
import HeaderInfo from "../HeaderInfo";
import Header from "../Header";
import Footer from "../Footer";
import { Main, Content } from "./styles";

interface MainProps {
  headerData: any;
}
const MainComponent: React.FC<MainProps> = ({
  headerData,
  children,
}): JSX.Element => {
  useEffect(() => {}, []);
  return (
    <Main>
      <HeaderInfo />
      <Header data={headerData} />
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};
export default MainComponent;
