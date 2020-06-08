import React from "react";
import { IoIosPin, IoIosPrint, IoIosHeart, IoMdEye } from "react-icons/io";
import {
  Content,
  Title,
  Divider,
  Actions,
  Button,
  ActionsTitle,
} from "./styles";
import LayoutBox from "../LayoutBox";

const DayPass = () => {
  return (
    <LayoutBox width={370}>
      <Title>درخواست بازدید</Title>
      <Divider />
      <Actions>
        <Button>درخواست</Button>
      </Actions>
    </LayoutBox>
  );
};
export default DayPass;
