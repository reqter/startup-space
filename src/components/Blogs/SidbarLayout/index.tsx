import React, { HTMLAttributes } from "react";
import { Content, Title, Divider } from "./styles";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}
const SidebarLayout: React.FC<IProps> = ({ title, children, className }) => {
  return (
    <Content className={className}>
      <Title>{title}</Title>
      <Divider />
      {children}
    </Content>
  );
};
export default SidebarLayout;
