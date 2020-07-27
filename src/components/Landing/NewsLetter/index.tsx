import React from "react";
import { useForm } from "react-hook-form";
import Section from "../../Common/Section";
import Divider from "../../Common/Divider";
import { toggleModal } from "../../Common/Modal";
import Alert from "../../Common/AlertModal";
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
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";

const NewsLetter = () => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onSubmit",
  });
  const { _subscribe } = useGlobalApi();
  const { footerData, landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  const { getValue } = useObjectPropsValue();
  const footer = footerData ? footerData[0] : {};
  function handleCloseAlert() {
    toggleModal();
  }
  const onSubmit = ({ email }) => {
    _subscribe(
      email,
      (result) => {
        reset();
        toggleModal({
          render: () => {
            return (
              <Alert
                title={getValue(footer, "subscribesuccesstitle")}
                info={getValue(footer, "subscribesuccessdescription")}
                btnText={getValue(footer, "subscribesuccessactiontext")}
                onClose={handleCloseAlert}
              />
            );
          },
        });
      },
      () => {}
    );
  };

  return data.isnewsletterenabled ? (
    <Section bgColor={theme`colors.gray.200`}>
      <Container>
        <ImageBox bgUrl={data.newslettermedia} />
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <Header>{getValue(data, "newslettertitle")}</Header>
          <Divider />
          <Description>{getValue(data, "newsletterdescription")}</Description>
          <Input
            placeholder={getValue(data, "newsletterplaceholder")}
            type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            hasError={errors.email}
          />

          <Button type="submit">
            {getValue(data, "newsletteractiontext")}
          </Button>
        </FormBox>
      </Container>
    </Section>
  ) : null;
};
export default NewsLetter;
