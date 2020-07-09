import React from "react";
import Form from "components/Common/Form";
import { CommentFormContainer, Title, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Reply = () => {
  const formRef = React.useRef(null);
  const { currentLanguage, blogsPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  return (
    <CommentFormContainer>
      <Title>{getValue(blogsPageData, "detailreplytitle")}</Title>
      <Form
        ref={formRef}
        mode="new"
        rowColumns={2}
        filters={{}}
        initialValues={{}}
        fieldsArray={[
          {
            name: "name",
            type: "string",
            description: {
              [currentLanguage]: getValue(
                blogsPageData,
                "detailnameinputplaceholder"
              ),
            },
          },
          {
            name: "email",
            type: "string",
            description: {
              [currentLanguage]: getValue(
                blogsPageData,
                "detailemailinputplaceholder"
              ),
            },
          },
          {
            name: "message",
            type: "string",
            multiline: true,
            description: {
              [currentLanguage]: getValue(
                blogsPageData,
                "detailmessageplaceholder"
              ),
            },
            colSpan: 2,
          },
        ]}
      />
      <Button>{getValue(blogsPageData, "detailreplyactiontext")}</Button>
    </CommentFormContainer>
  );
};
export default Reply;
