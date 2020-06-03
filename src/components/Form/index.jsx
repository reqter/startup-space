import React, { useImperativeHandle, useRef, forwardRef } from "react";
import { useForm, FormContext } from "react-hook-form";
import { renderFields } from "./helper";
import { CustomForm } from "./styles";

const Form = (
  { mode, rowColumns, fieldsArray = [], initialValues = {}, filters },
  ref
) => {
  const methods = useForm();
  const formRef = React.useRef(methods);
  useImperativeHandle(ref, () => formRef.current);

  return (
    <FormContext {...methods}>
      <form>
        <CustomForm rowColumns={rowColumns}>
          {renderFields(mode, rowColumns, fieldsArray, initialValues, filters)}
        </CustomForm>
      </form>
    </FormContext>
  );
};

export default forwardRef(Form);
