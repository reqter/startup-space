import React from "react";
import BlogItem from "../../../BlogItem";
import { Container } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const List = ({ data = [] }) => {
  const { landingData } = useGlobalState();

  return (
    <Container>
      {data &&
        data
          .slice(0, 3)
          .map((item, index) => (
            <BlogItem
              key={index}
              data={item}
              actionName={landingData && landingData[0].blogaction_text}
            />
          ))}
    </Container>
  );
};
export default List;
