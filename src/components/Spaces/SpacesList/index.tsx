import React from "react";
import Card from "./Item";
import { Container, Left, Right } from "./styles";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";
const SpacesList = () => {
  const { officesData } = useGlobalState();
  return (
    <Container>
      {officesData && (
        <>
          <Left>
            <Card
              hasMargin={true}
              colSpan={1}
              data={officesData && officesData[0]}
            ></Card>
            <Card
              hasMargin={false}
              colSpan={1}
              data={officesData && officesData[1]}
            ></Card>
            <Card
              hasMargin={false}
              colSpan={2}
              data={officesData && officesData[2]}
            ></Card>
          </Left>
          <Right>
            <Card
              hasMargin={false}
              colSpan={2}
              data={officesData && officesData[3]}
            ></Card>
          </Right>
        </>
      )}
    </Container>
  );
};
export default SpacesList;
