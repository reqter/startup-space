import React from "react";
import Form from "components/Common/Form";
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
  const formRef = React.useRef(null);
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox width={370}>
      <Title>{data.daypassboxtitle}</Title>
      <Divider />
      <span className="text-sm pb-3">
        Fill out your info below and we'll get you connected with one of our
        representatives.
      </span>
      <Form
        ref={formRef}
        mode="new"
        rowColumns={1}
        filters={{}}
        initialValues={{}}
        fieldsArray={[
          {
            name: "a",
            description: {
              en: "Product",
              fa: "",
            },
            description1: {
              en: "",
              fa: "",
            },
          },
          {
            name: "aa",
            description: {
              en: "Full Name",
              fa: "",
            },
            description1: {
              en: "",
              fa: "",
            },
          },
          {
            name: "aaa",
            description: {
              en: "Phone Number",
              fa: "",
            },
            description1: {
              en: "",
              fa: "",
            },
          },
          {
            name: "aaaaa",
            description: {
              en: "Email",
              fa: "",
            },
            description1: {
              en: "",
              fa: "",
            },
          },
        ]}
      />
      <Actions>
        <Button bgColor={"blue"}>{data.requestboxaction1title}</Button>
      </Actions>
    </LayoutBox>
  );
};
export default Reserve;
