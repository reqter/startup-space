import React from "react";
import Head from "next/head";
import HeaderInfo from "../HeaderInfo";
import Header from "../Header";
import Footer from "../Footer";
import { Main, Content } from "./styles";

interface MainProps {
  title?: string;
  logo?: string;
}
const MainComponent: React.FC<MainProps> = ({
  logo,
  title,
  children,
}): JSX.Element => {
  return (
    <Main>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          type="image/x-icon"
          href={logo && logo.length ? logo : "images/favicon.ico"}
        />
      </Head>
      <HeaderInfo />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};
export default MainComponent;
