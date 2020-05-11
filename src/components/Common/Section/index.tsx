import React from "react";
import { Wrapper, Content, Title, Header, Divider } from "./styles";

interface IProps {
  title?: string;
  header?: string;
  bgColor?: string;
  bgImage?: string;
}
const Section: React.FC<IProps> = ({
  title,
  header,
  bgColor,
  bgImage,
  children,
}) => {
  return (
    <Wrapper bgColor={bgColor} bgImage={bgImage}>
      <Content>
        {title && <Title>{title}</Title>}
        {header && <Header>{header}</Header>}
        {header && title && <Divider />}
        {children}
      </Content>
    </Wrapper>
  );
};
export default Section;
