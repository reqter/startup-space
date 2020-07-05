import React from "react";
import Form from "components/Common/Form";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { FormContainer, Button } from "./styles";

const ContactUsForm = () => {
  const { contactUsPageData, currentLanguage } = useGlobalState();
  const { getValue } = useObjectPropsValue();

  const formRef = React.useRef(null);
  const {} = useGlobalState();

  return (
    <FormContainer>
      <Form
        ref={formRef}
        mode="new"
        rowColumns={2}
        filters={{}}
        initialValues={{}}
        fieldsArray={[
          {
            name: "a",
            description: {
              [currentLanguage]: getValue(
                contactUsPageData,
                "nameinputplacehoder"
              ),
            },
          },
          {
            name: "aa",
            description: {
              [currentLanguage]: getValue(
                contactUsPageData,
                "emailinputplaceholder"
              ),
            },
          },
          {
            name: "aaa",
            description: {
              [currentLanguage]: getValue(
                contactUsPageData,
                "phoneinputplaceholder"
              ),
            },
            colSpan: 2,
          },
          {
            name: "aaaaa",
            description: {
              [currentLanguage]: getValue(
                contactUsPageData,
                "subjectinputplaceholder"
              ),
            },
            colSpan: 2,
          },
          {
            colSpan: 2,
            name: "aaaaaaa",
            description: {
              [currentLanguage]: getValue(
                contactUsPageData,
                "messageinputplaceholder"
              ),
            },
            multiline: true,
          },
        ]}
      />
      <Button>{getValue(contactUsPageData, "formactiontext")}</Button>
    </FormContainer>
  );
};
export default ContactUsForm;
