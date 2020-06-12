import React from "react";
import { IoIosPin, IoIosPrint, IoIosHeart, IoMdEye } from "react-icons/io";
import Section from "../../Common/Section";
import Features from "../Features";
import ActionsBox from "../ActionsBox";
import { Main } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const MainContent = () => {
  const { partnerDetailStickySideBar } = useGlobalState();
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Main isSideSticky={partnerDetailStickySideBar}>
        <Features />
        <ActionsBox />
      </Main>
    </Section>
  );
};
export default MainContent;
