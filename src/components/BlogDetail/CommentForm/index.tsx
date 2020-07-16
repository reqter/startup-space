import { useForm } from "react-hook-form";
import Input from "components/Common/Elements/Input";
import Textarea from "components/Common/Elements/Textarea";
import { CommentFormContainer, Title, Row, Column, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Reply = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onSubmit",
  });
  const { blogsPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };
  return (
    <CommentFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>{getValue(blogsPageData, "detailreplytitle")}</Title>
      <Row>
        <Column>
          <Input
            name="name"
            ref={register({
              required: true,
            })}
            placeholder={getValue(blogsPageData, "detailnameinputplaceholder")}
          />
        </Column>
        <Column>
          <Input
            name="email"
            ref={register({
              required: true,
            })}
            placeholder={getValue(blogsPageData, "detailemailinputplaceholder")}
          />
        </Column>
      </Row>
      <Row>
        <Textarea
          name="message"
          ref={register({
            required: true,
          })}
          placeholder={getValue(blogsPageData, "detailmessageplaceholder")}
        />
      </Row>
      <Button>{getValue(blogsPageData, "detailreplyactiontext")}</Button>
    </CommentFormContainer>
  );
};
export default Reply;
