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
import LayoutBox from "../../LayoutBox";

const DayPass = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox width={370}>
      <Title>{data.daypassboxtitle}</Title>
      <Divider />
      <Actions>
        <Button>{data.daypassboxaction1title}</Button>
      </Actions>
    </LayoutBox>
  );
};
export default DayPass;
