import React from "react";
import { useRouter } from "next/router";
import Form from "components/Common/Form";
import { CommentFormContainer, Title, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
const Reply = () => {
  const router = useRouter();
  const formRef = React.useRef(null);
  const [dataList, setData] = React.useState<object[]>();
  const { _getPartnerComments } = useGlobalApi();
  const { currentLanguage, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );

  return (
    <CommentFormContainer>
      <Title>Leave a comment</Title>
      <Form
        ref={formRef}
        mode="new"
        rowColumns={1}
        filters={{}}
        initialValues={{}}
        fieldsArray={[
          {
            name: "a",
            type: "string",
            description: {
              [currentLanguage]: "Name",
            },
          },
          {
            name: "aa",
            type: "string",
            description: {
              [currentLanguage]: "Email",
            },
          },
          {
            name: "aa",
            type: "string",
            description: {
              [currentLanguage]: "Website",
            },
          },
          {
            name: "aaaaa",
            type: "string",
            multiline: true,
            description: {
              [currentLanguage]: "Message",
            },
          },
        ]}
      />
      <Button>Post Comment</Button>
    </CommentFormContainer>
  );
};
export default Reply;
