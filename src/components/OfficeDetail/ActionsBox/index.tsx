import React from "react";
import Reserve from "../Reserve";
import { ActionsContainer } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const ActionsBox = () => {
  const { partnerDetailStickySideBar, isVisibleFooter } = useGlobalState();

  return (
    <ActionsContainer
      isSideSticky={partnerDetailStickySideBar}
      isVisibleFooter={isVisibleFooter}
    >
      <Reserve />
    </ActionsContainer>
  );
};
export default ActionsBox;
