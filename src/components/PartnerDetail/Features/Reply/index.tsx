import React from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { toggleModal } from "../../../Common/Modal";
import Alert from "../../../Common/AlertModal";
import Input from "components/Common/Elements/Input";
import Textarea from "components/Common/Elements/Textarea";
import VisibilitySensor from "react-visibility-sensor";
import LayoutBox from "../../LayoutBox";
import Comment from "./Comment";
import {
  CommentsWrapper,
  Title,
  Description,
  Form,
  Row,
  Column,
  LoadMore,
  Button,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const limit = 10;
const Reply = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onSubmit",
  });
  const { getValue } = useObjectPropsValue();
  const [dataList, setData] = React.useState<object[]>();
  const { _getPartnerComments, _addReview } = useGlobalApi();
  const { partnerDetailPage, partnerDetailId } = useGlobalState();
  const [skip, setSkip] = React.useState(0);
  const [commentsLength, setCommentsLength] = React.useState(0);
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  function handleChange(isVisible: boolean) {
    if (isVisible && !dataList)
      _getPartnerComments(
        skip,
        limit,
        partnerDetailId,
        (result) => {
          setData(result);
          setCommentsLength(result ? result.length : 0);
        },
        () => {}
      );
  }
  const onSubmit = ({ name, email, body }) => {
    _addReview(
      name,
      email,
      body,
      partnerDetailId,
      () => {
        reset();
        toggleModal({
          render: () => {
            return (
              <Alert
                title={getValue(data, "replysuccesstitle")}
                info={getValue(data, "replysuccessinfo")}
                btnText={getValue(data, "replysuccessaction")}
                onClose={handleCloseAlert}
              />
            );
          },
        });
      },
      () => {}
    );
  };
  function handleCloseAlert() {
    toggleModal();
  }
  function handleLoadMore() {
    _getPartnerComments(
      skip + 1 * limit,
      limit,
      partnerDetailId,
      (result) => {
        setSkip(skip + 1);
        setData([...dataList, ...result]);
        setCommentsLength(result ? result.length : 0);
      },
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Column>
              <Input
                placeholder={getValue(data, "replynameinputtitle")}
                name="name"
                ref={register({
                  required: true,
                })}
                hasError={errors.name}
              />
            </Column>
            <Column>
              <Input
                type="email"
                placeholder={getValue(data, "replyemailinputtitle")}
                name="email"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                hasError={errors.email}
              />
            </Column>
          </Row>
          <Row>
            <Textarea
              placeholder={getValue(data, "replydescriptioninputtitle")}
              name="body"
              ref={register({
                required: true,
              })}
              hasError={errors.body}
            />
          </Row>
          <Button>{data.replybuttontext}</Button>
        </Form>
        <Title>{data.commentslisttitle}</Title>
        {dataList && (
          <CommentsWrapper>
            {dataList.map(
              (item: { name: string; body: string; rate: string }, index) => (
                <Comment key={index} data={item} />
              )
            )}
            {commentsLength === limit && (
              <LoadMore onClick={handleLoadMore}>
                {getValue(data, "commentsloadmore")}&nbsp;
                <IoIosArrowDown />
              </LoadMore>
            )}
          </CommentsWrapper>
        )}
      </LayoutBox>
    </VisibilitySensor>
  );
};
export default Reply;
