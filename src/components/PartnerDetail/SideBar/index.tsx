import React from "react";
import Reserve from "./Reserve";
import NewOffices from "./NewOffices";
import NewBlogs from "./NewBlogs";
import { ActionsContainer } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const ActionsBox = () => {
  return (
    <ActionsContainer>
      <NewOffices />
      <NewBlogs />
    </ActionsContainer>
  );
};
export default ActionsBox;
