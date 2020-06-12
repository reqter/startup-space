import React from "react";
import Reserve from "../Reserve";
import DayPass from "../DayPass";
import { ActionsContainer } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const ActionsBox = () => {
  const { partnerDetailStickySideBar } = useGlobalState();

  return (
    <ActionsContainer isSideSticky={partnerDetailStickySideBar}>
      <Reserve />
      <DayPass />
    </ActionsContainer>
  );
};
export default ActionsBox;
