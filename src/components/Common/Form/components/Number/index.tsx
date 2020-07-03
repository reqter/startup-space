import React from "react";
import RangeInput from "./RangeNumber";

const NumberInput = ({ field, mode, initialValue, filter }) => {
  return (
    <RangeInput
      field={field}
      mode={mode}
      initialValue={initialValue}
      filter={filter}
    />
  );
};

export default NumberInput;
