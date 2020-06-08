import React from "react";
import Form from "components/Form";
import LayoutBox from "../LayoutBox";
import Comment from "./Comment";
import { CommentsWrapper, Title, Description, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
const Reply = () => {
  const formRef = React.useRef(null);
  const { searchFormContentType = {}, currentLanguage } = useGlobalState();

  const restField = (): object[] => {
    return searchFormContentType && searchFormContentType.fields
      ? searchFormContentType.fields
          .filter(
            (item) =>
              item.name !== "name" &&
              item.name !== "actionstitle" &&
              item.name !== "action1text" &&
              item.name !== "action2text"
          )
          .map((item, index: number) => {
            if (index > 1) item.colSpan = 2;
            return item;
          })
      : [];
  };
  return (
    <LayoutBox>
      <Title>ارسال نظر</Title>
      <Description>آدرس ایمیل شما منتشر نخواهد شد.*</Description>
      <Form
        ref={formRef}
        mode="new"
        rowColumns={2}
        filters={{}}
        initialValues={{}}
        fieldsArray={[
          {
            name: "a",
            type: "string",
            description: {
              fa: "نام شما",
            },
          },
          {
            name: "aa",
            type: "string",
            description: {
              fa: "ایمیل شما",
            },
          },
          {
            name: "aaa",
            type: "string",
            description: {
              fa: "نام شرکت",
            },
            colSpan: 2,
          },
          {
            name: "aaaaa",
            type: "string",
            multiline: true,
            description: {
              fa: "نظر شما",
            },
            colSpan: 2,
          },
        ]}
      />
      <Button>ارسال نظر</Button>
      <Title>لیست نظرات</Title>
      <CommentsWrapper>
        <Comment />
        <Comment />
        <Comment />
      </CommentsWrapper>
    </LayoutBox>
  );
};
export default Reply;
