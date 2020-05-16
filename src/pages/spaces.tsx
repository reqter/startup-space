import React from "react";
import MainLayout from "../components/MainLayout";
import { i18n } from "../../config/Next18Wrapper";
import { getToken, getHeaderData, getFooterData } from "../hooks/useGlobalApi";
import { styled } from "linaria/lib/react";

const Wrapper = styled.div`
  @apply h-screen bg-black;
`;

const Content = styled.div`
  @apply w-1150 flex m-auto pt-32 text-white text-2xl;
`;

const Spaces = ({ title }) => {
  return (
    <MainLayout>
      <Wrapper>
        <Content>
          <h1>{title}</h1>
        </Content>
      </Wrapper>
    </MainLayout>
  );
};

Spaces.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [headerData, footerData] = await Promise.all([
        getHeaderData(currentLanguage),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        footerData,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  }
  return {};
};

export default Spaces;
