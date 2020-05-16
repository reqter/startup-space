import React from "react";
import Card from "./Item";
import { Container } from "./styles";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";
// "https://www.socialinnovationacademy.eu/wp-content/uploads/2018/06/cities.png"
const CitiesList = () => {
  const { citiesData } = useGlobalState();
  return (
    <Container>
      {citiesData &&
        citiesData
          .slice(0, 4)
          .map((item, index) => <Card key={index} data={item} />)}
    </Container>
  );
};
export default CitiesList;
