import React from "react";
import Reserve from "../Reserve";
import DayPass from "../DayPass";
import { ActionsContainer } from "./styles";

const ActionsBox = () => {
  return (
    <ActionsContainer>
      <Reserve />
      <DayPass />
    </ActionsContainer>
  );
};
export default ActionsBox;
