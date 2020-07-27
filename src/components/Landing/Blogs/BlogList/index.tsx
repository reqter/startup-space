import React from "react";
import BlogItem from "components/Common/BlogItem";
import { Container } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const List = ({ data = [] }) => {
  const { landingData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  return (
    <Container>
      {data &&
        data.map((item, index) => (
          <BlogItem
            key={index}
            data={item}
            actionName={
              landingData ? getValue(landingData[0], "blogaction_text") : ""
            }
          />
        ))}
    </Container>
  );
};
export default List;
