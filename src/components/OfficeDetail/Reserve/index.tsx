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

const Reserve = () => {
  return (
    <LayoutBox width={370}>
      <Title>انتخاب محصول و پرداخت</Title>
      <Divider />

      <ActionsTitle>پرداخت و رزرو محصول</ActionsTitle>
      <Actions>
        <Button>پرداخت</Button>
      </Actions>
    </LayoutBox>
  );
};
export default Reserve;
