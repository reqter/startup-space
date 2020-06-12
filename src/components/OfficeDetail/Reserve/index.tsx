import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
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
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox width={370}>
      <Title>{data.requestboxtitle}</Title>
      <Divider />

      <ActionsTitle>{data.requestboxactionstitle}</ActionsTitle>
      <Actions>
        <Button>{data.requestboxaction1title}</Button>
      </Actions>
    </LayoutBox>
  );
};
export default Reserve;
