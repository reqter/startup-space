import { useState, useEffect } from "react";
import { Container, Title, RelatedList } from "./styles";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";

const RelatedBlogs = () => {
  return (
    <Container>
      <Title>Related Posts</Title>
      <RelatedList>
        {[1, 1, 1].map((item) => (
          <Item data={item} />
        ))}
      </RelatedList>
    </Container>
  );
};
export default RelatedBlogs;
