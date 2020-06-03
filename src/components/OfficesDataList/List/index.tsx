import React from "react";
import Card from "./Item";
import { Container } from "./styles";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";
const SpacesList = () => {
  const { officesData } = useGlobalState();
  return (
    <Container>
      {officesData &&
        officesData.map((item, index) => <Card key={index} data={item} />)}
    </Container>
  );
};
export default SpacesList;
