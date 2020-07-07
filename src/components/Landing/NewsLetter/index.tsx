import React from "react";
import { useForm } from "react-hook-form";
import Section from "../../Common/Section";
import Divider from "../../Common/Divider";
import { toggleModal } from "../../Common/Modal";
import Alert from "./Alert";
import {
  Container,
  FormBox,
  Header,
  Description,
  Input,
  Button,
  ImageBox,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const NewsLetter = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onSubmit",
  });
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  function handleCloseAlert() {
    toggleModal();
  }
  const onSubmit = (formData) =>
    toggleModal({
      render: () => {
        return (
          <Alert
            title={data.newslettersuccesstitle}
            info={data.newslettersuccessdescription}
            btnText={data.newsletterasuccessactiontext}
            onClose={handleCloseAlert}
          />
        );
      },
    });
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Container>
        <ImageBox bgUrl={data.newslettermedia} />
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <Header>{data.newslettertitle}</Header>
          <Divider />
          <Description>{data.newsletterdescription}</Description>
          <Input
            placeholder={data.newsletterplaceholder}
            type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            hasError={errors.email}
          />

          <Button type="submit">{data.newsletteractiontext}</Button>
        </FormBox>
      </Container>
    </Section>
  );
};
export default NewsLetter;
