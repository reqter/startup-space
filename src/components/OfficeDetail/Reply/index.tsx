import React from "react";
import Form from "components/Form";
import LayoutBox from "../LayoutBox";
import Comment from "./Comment";
import { CommentsWrapper, Title, Description, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
const Reply = () => {
  const formRef = React.useRef(null);
  const {
    searchFormContentType = {},
    currentLanguage,
    partnerDetail,
    partnerDetailPage,
  } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );

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
      <Title>{data.replyboxtitle}</Title>
      <Description>{data.replyboxdescription}</Description>
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
              [currentLanguage]: data.replynameinputtitle,
            },
          },
          {
            name: "aa",
            type: "string",
            description: {
              [currentLanguage]: data.replyemailinputtitle,
            },
          },
          {
            name: "aaaaa",
            type: "string",
            multiline: true,
            description: {
              [currentLanguage]: data.replydescriptioninputtitle,
            },
            colSpan: 2,
          },
        ]}
      />
      <Button>{data.replybuttontext}</Button>
      <Title>{data.commentslisttitle}</Title>
      <CommentsWrapper>
        <Comment />
        <Comment />
        <Comment />
      </CommentsWrapper>
    </LayoutBox>
  );
};
export default Reply;
