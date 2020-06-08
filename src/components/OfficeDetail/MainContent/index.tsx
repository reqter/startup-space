import React from "react";
import { IoIosPin, IoIosPrint, IoIosHeart, IoMdEye } from "react-icons/io";
import Section from "../../Common/Section";
import Features from "../Features";
import ActionsBox from "../ActionsBox";
import { Main } from "./styles";

const MainContent = () => {
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Main>
        <Features />
        <ActionsBox />
      </Main>
    </Section>
  );
};
export default MainContent;
