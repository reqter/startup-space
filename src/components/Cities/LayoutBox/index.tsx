import React from "react";
import { Layout, Header, Title } from "./styles";

interface IProps {
  title?: string;
  actions?: () => React.ReactNode;
  width?: number;
  height?: number;
}

const LayoutBox: React.FC<IProps> = ({
  title,
  actions,
  width,
  height,
  children,
}) => {
  return (
    <Layout width={width} height={height}>
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
