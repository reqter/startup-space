import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type?: string;
  placeholder?: string;
}
import { InputWrapper, Icon, Title, Element } from "./styles";
const Input: React.FC<IProps> = ({
  title,
  type = "string",
  placeholder = "",
  ...rest
}): JSX.Element => {
  return (
    <InputWrapper>
      <Icon></Icon>
      <Title>{title}</Title>
      <Element type={type} placeholder={placeholder} {...rest}></Element>
    </InputWrapper>
  );
};

export default Input;
