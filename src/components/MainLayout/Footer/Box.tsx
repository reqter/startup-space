import React from "react";
import { Box, Title, Divider } from "./styles";
const Container = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Divider />
      {children}
    </Box>
  );
};
export default Container;
