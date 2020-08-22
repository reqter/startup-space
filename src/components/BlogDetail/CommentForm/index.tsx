import { useState } from "react";
import { useForm } from "react-hook-form";
import { toggleModal } from "../../Common/Modal";
import Alert from "../../Common/AlertModal";
import Input from "components/Common/Elements/Input";
import Textarea from "components/Common/Elements/Textarea";
import { CommentFormContainer, Title, Row, Column, Button } from "./styles";
import SpinnerButton from "components/Common/SpinnerButton";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const Reply = () => {
  const { _addReview } = useBlogApi();
  const { register, handleSubmit, watch, errors, reset } = useForm({
    mode: "onSubmit",
  });
  const { blogsPageData, blogDetailData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const [loading, toggleLoading] = useState(false);
  const onSubmit = ({ name, email, body }) => {
    if (!loading) {
      toggleLoading(true);

      _addReview(
        name,
        email,
        body,
        blogDetailData?._id,
        () => {
          toggleLoading(false);
          reset();
          toggleModal({
            render: () => {
              return (
                <Alert
                  title={getValue(
                    blogsPageData,
                    "replysuccesstitle",
                    "ثبت نظر"
                  )}
                  info={getValue(
                    blogsPageData,
                    "replysuccessinfo",
                    "نظر شما با موفقیت ثبت شد"
                  )}
                  btnText={getValue(
                    blogsPageData,
                    "replysuccessaction",
                    "ادامه"
                  )}
                  onClose={handleCloseAlert}
                />
              );
            },
          });
        },
        () => {
          toggleLoading(false);
        }
      );
    }
  };
  function handleCloseAlert() {
    toggleModal();
  }
  return (
    <CommentFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>{getValue(blogsPageData, "detailreplytitle")}</Title>
      <Row>
        <Column>
          <Input
            placeholder={getValue(blogsPageData, "detailnameinputplaceholder")}
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
            placeholder={getValue(blogsPageData, "detailemailinputplaceholder")}
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
          placeholder={getValue(blogsPageData, "detailmessageplaceholder")}
          name="body"
          ref={register({
            required: true,
          })}
          hasError={errors.body}
        />
      </Row>
      <SpinnerButton loading={loading} type="submit">
        {getValue(blogsPageData, "detailreplyactiontext")}
      </SpinnerButton>
    </CommentFormContainer>
  );
};
export default Reply;
