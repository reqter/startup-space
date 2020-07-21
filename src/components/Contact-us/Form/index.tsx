import React from "react";
import { useForm } from "react-hook-form";
import { toggleModal } from "../../Common/Modal";
import Alert from "../../Common/AlertModal";
import Input from "components/Common/Elements/Input";
import Textarea from "components/Common/Elements/Textarea";

import Form from "components/Common/Form";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import { FormContainer, Row, Column, Button } from "./styles";

const ContactUsForm = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm({
    mode: "onSubmit",
  });
  const { _addContactUs } = useGlobalApi();
  const { contactUsPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();

  const onSubmit = ({ name, email, phoneNumber, subject, body }) => {
    _addContactUs(
      name,
      email,
      phoneNumber,
      subject,
      body,
      () => {
        reset();
        toggleModal({
          render: () => {
            return (
              <Alert
                title={getValue(contactUsPageData, "contactsuccesstitle")}
                info={getValue(contactUsPageData, "contactsuccessinfo")}
                btnText={getValue(contactUsPageData, "contactsuccessaction")}
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

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column>
          <Input
            placeholder={getValue(contactUsPageData, "nameinputplacehoder")}
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
            placeholder={getValue(contactUsPageData, "emailinputplaceholder")}
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
        <Input
          placeholder={getValue(contactUsPageData, "phoneinputplaceholder")}
          name="phone"
          ref={register({
            required: true,
          })}
          hasError={errors.phone}
        />
      </Row>
      <Row>
        <Input
          placeholder={getValue(contactUsPageData, "subjectinputplaceholder")}
          name="subject"
          ref={register({
            required: true,
          })}
          hasError={errors.subject}
        />
      </Row>
      <Row>
        <Textarea
          placeholder={getValue(contactUsPageData, "messageinputplaceholder")}
          name="body"
          ref={register({
            required: true,
          })}
          hasError={errors.body}
        />
      </Row>
      <Button>{getValue(contactUsPageData, "formactiontext")}</Button>
    </FormContainer>
  );
};
export default ContactUsForm;
