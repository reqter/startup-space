import React from "react";
import { IoIosPin, IoIosPrint, IoIosHeart, IoMdEye } from "react-icons/io";
import Section from "../../Common/Section";
import Features from "../Features";
import ReserveBox from "../Reserve";
import { Main } from "./styles";

const MainContent = () => {
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Main>
        <Features />
        <ReserveBox />
      </Main>
    </Section>
  );
};
export default MainContent;
