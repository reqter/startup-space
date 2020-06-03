import React from "react";
import { useFormContext } from "react-hook-form";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";
import InputWrapper from "../InputWrapper";
import useGlobalState from "../../../../hooks/useGlobal/useGlobalState";

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
      input={
        <Range
          allowCross={false}
          push={50000}
          defaultValue={[400000, 600000]}
          min={parseInt(field.limit && field.limit.min ? field.limit.min : 0)}
          max={parseInt(
            field.limit && field.limit.max ? field.limit.max : 1000
          )}
          onChange={handleOnChange}
          trackStyle={[{ backgroundColor: theme`colors.blue.500`, height: 7 }]}
          handleStyle={[
            {
              backgroundColor: theme`colors.white`,
              height: 22,
              width: 22,
              marginTop: -7,
              boxShadow: "0 0 10px lightgray",
              border: "none",
            },
            {
              backgroundColor: theme`colors.white`,
              height: 22,
              width: 22,
              marginTop: -7,
              boxShadow: "0 0 10px lightgray",
              border: "none",
            },
          ]}
          railStyle={{ backgroundColor: theme`colors.gray.200`, height: 7 }}
        />
      }
    />
  );
};

export default RangeNumberInput;
