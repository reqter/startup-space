import React from "react";
import { Wrapper, Label, ErrorText } from "./styles";

interface IProps {
  title?: string;
  errorText?: string;
  input: React.ReactNode;
}

const InputWrapper = ({ title = "", errorText = "", input }: IProps) => {
  return (
    <Wrapper>
      <Label>{title}</Label>
      {input}
      <ErrorText>{errorText}</ErrorText>
    </Wrapper>
  );
};
export default InputWrapper;
