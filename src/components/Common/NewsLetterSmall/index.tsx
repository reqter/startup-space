import { useForm } from "react-hook-form";
import { toggleModal } from "..//Modal";
import Alert from "../NewsLetterAlert";
import {
  NewsLetterWrapper,
  NewsLetterContent,
  Text,
  InputWrapper,
  Input,
  Button,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const NewsLetterFAQ = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onSubmit",
  });
  function handleCloseAlert() {
    toggleModal();
  }
  const onSubmit = (formData) =>
    toggleModal({
      render: () => {
        return (
          <Alert title={""} info={""} btnText={""} onClose={handleCloseAlert} />
        );
      },
    });
  const { footerData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const footer = footerData ? footerData[0] : {};
  return (
    <NewsLetterWrapper>
      <NewsLetterContent>
        <Text>{getValue(footer, "subscribetitle")}</Text>
        <InputWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={getValue(footer, "subscribeinputplaceholder")}
            type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            hasError={errors.email}
          />
          <Button type="submit">
            {getValue(footer, "subscribeinputbtntext")}
          </Button>
        </InputWrapper>
      </NewsLetterContent>
    </NewsLetterWrapper>
  );
};
export default NewsLetterFAQ;
