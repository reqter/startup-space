import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "next/router";
import Form from "components/Common/Form";
import LayoutBox from "../LayoutBox";
import Comment from "./Comment";
import { CommentsWrapper, Title, Description, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
const Reply = () => {
  const router = useRouter();
  const formRef = React.useRef(null);
  const [dataList, setData] = React.useState<object[]>();
  const { _getPartnerComments } = useGlobalApi();
  const {
    currentLanguage,
    partnerDetailPage,
    partnerDetailId,
  } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  function handleChange(isVisible: boolean) {
    if (isVisible && !dataList)
      _getPartnerComments(
        0,
        25,
        partnerDetailId,
        (result) => setData(result),
        () => {}
      );
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: -100 }}
    >
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
        {dataList && (
          <CommentsWrapper>
            {dataList.map(
              (item: { name: string; body: string; rate: string }, index) => (
                <Comment key={index} data={item} />
              )
            )}
          </CommentsWrapper>
        )}
      </LayoutBox>
    </VisibilitySensor>
  );
};
export default Reply;
