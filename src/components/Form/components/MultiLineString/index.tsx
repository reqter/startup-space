import React from "react";
import { useFormContext } from "react-hook-form";
import {
  validateEmail,
  isUrl,
  isPhoneNumber,
  checkStringLimit,
} from "utils/formValidations";
import InputWrapper from "../InputWrapper";
import { Input } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const StringInput = ({ field, mode, initialValue, filter }) => {
  const {
    register,
    errors,
    setError,
    clearError,
    setValue,
    formState: { dirty },
  } = useFormContext();
  const { currentLanguage } = useGlobalState();

  const type = React.useMemo(
    () => (field.appearance ? field.appearance : "text"),
    []
  );

  const _setError = (type, message) => {
    const e = { type, name: field.name, message };
    setError([e]);
  };
  const handleOnChange = (e) => {
    const value = e.target.value;
    const length = value.length;
    let isValid = true;

    if (mode !== "filter") {
      if (field.isRequired) {
        if (length === 0) {
          isValid = false;
          _setError("required", "This is required.");
        }
      }
    }

    if (isValid) {
      if (type === "text") {
        if (field.limit) {
          const result = checkStringLimit(field.limit, length);
          if (!result.isValid) {
            isValid = false;
            _setError("length", result["message"]);
          }
        }
      } else if (type === "email") {
        if (!validateEmail(value)) {
          isValid = false;
          _setError("notMatch", "Incorrect email.");
        }
      } else if (type === "url") {
        if (!isUrl(value)) {
          isValid = false;
          _setError("notMatch", "Incorrect url.");
        }
      } else if (type === "phoneNumber") {
        if (!isPhoneNumber(value)) {
          _setError("notMatch", "Incorrect phone number.");
          isValid = false;
        }
      }
    }

    if (mode === "filter") if (length === 0) isValid = true;
    if (isValid) {
      clearError(field.name);
      setValue(field.name, value);
    }
  };

  // set default value to form object if form is in new mode
  React.useEffect(() => {
    if (mode === "new")
      if (field.defaultValue) setValue(field.name, field.defaultValue);
  }, []);

  return (
    <InputWrapper
      title={field.title ? field.title[currentLanguage] : ""}
      errorText={errors[field.name] ? errors[field.name]["message"] : ""}
      input={
        <Input
          name={field.name}
          ref={register}
          title={field.title ? field.title[currentLanguage] : ""}
          placeholder={
            field.description ? field.description[currentLanguage] : ""
          }
          type={field.appearance}
          defaultValue={
            mode !== "filter"
              ? initialValue
                ? initialValue
                : ""
              : filter
              ? filter
              : ""
          }
          onChange={handleOnChange}
          onBlur={handleOnChange}
          readOnly={mode === "view" ? true : false}
        />
      }
    />
  );
};

export default StringInput;
