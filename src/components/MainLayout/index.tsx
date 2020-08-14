import React from "react";
import Head from "next/head";
import Menu from "./Menu";
import Footer from "./Footer";
import Meta from "../Common/Meta";
import { MetaTags } from "interfaces/tag";
import { Modal } from "../Common/Modal";
import { Main, Content } from "./styles";

interface MainProps {
  logo?: string;
  metaTags?: MetaTags;
}
const MainComponent: React.FC<MainProps> = ({
  logo,
  metaTags,
  children,
}): JSX.Element => {
  return (
    <Main>
      <Meta tags={metaTags} logo={logo} />
      <Menu />
      <Content>{children}</Content>
      <Footer />
      <Modal />
    </Main>
  );
};
export default MainComponent;
