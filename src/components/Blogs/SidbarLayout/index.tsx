import React from "react";
import { Content, Title, Divider } from "./styles";

interface IProps {
  title: string;
}
const SidebarLayout: React.FC<IProps> = ({ title, children }) => {
  return (
    <Content>
      <Title>{title}</Title>
      <Divider />
      {children}
    </Content>
  );
};
export default SidebarLayout;
