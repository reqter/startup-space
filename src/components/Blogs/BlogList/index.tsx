import React from "react";
import Card from "./Item";
import { Container } from "./styles";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";

const List = () => {
  const { blogsData, landingData } = useGlobalState();

  return (
    <Container>
      {blogsData &&
        blogsData
          .slice(0, 3)
          .map((item, index) => (
            <Card
              key={index}
              data={item}
              actionName={landingData && landingData[0].blogaction_text}
            />
          ))}
    </Container>
  );
};
export default List;
