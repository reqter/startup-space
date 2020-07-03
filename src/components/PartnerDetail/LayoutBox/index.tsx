import React from "react";
import { Layout, Header, Title } from "./styles";

interface IProps {
  title?: string;
  actions?: () => React.ReactNode;
  body?: () => React.ReactNode;
  width?: number;
}

const LayoutBox: React.FC<IProps> = ({
  title,
  body,
  actions,
  width,
  children,
}) => {
  return (
    <Layout width={width}>
      {title && (
        <Header>
          <Title>{title}</Title>
          {actions && actions()}
        </Header>
      )}
      {children}
    </Layout>
  );
};
export default LayoutBox;
