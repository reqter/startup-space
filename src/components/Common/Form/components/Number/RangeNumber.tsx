import React from "react";
import { useFormContext } from "react-hook-form";
import InputWrapper from "../InputWrapper";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const RangeNumberInput = ({ field, mode, initialValue, filter }) => {
  const {
    register,
    errors,
    setError,
    clearError,
    setValue,
    getValues,
    formState: { dirty },
  } = useFormContext();
  const { currentLanguage } = useGlobalState();
  const [val, setVal] = React.useState<string>(
    (field.limit && field.limit.min ? field.limit.min : 0) +
      " - " +
      (field.limit && field.limit.max ? field.limit.max : 0)
  );

  const handleOnChange = (value) => {
    setValue(field.name, value);
    setVal(value[0] + " - " + value[1]);
  };

  // set default value to form object if form is in new mode
  React.useEffect(() => {
    register({ name: field.name });
    if (mode === "new")
      if (field.defaultValue) setValue(field.name, field.defaultValue);
  }, []);
  return (
    <InputWrapper
      title={field.title ? field.title[currentLanguage] + " " + val : ""}
      input={<input />}
    />
  );
};

export default RangeNumberInput;
