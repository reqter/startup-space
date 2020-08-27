import React from "react";
import Activity from "./Item";
import { Container } from "./styles";

const ActivitiesList = ({ data = [] }) => {
  return (
    <Container>
      {data && data.length
        ? data.map((item, index) => <Activity key={index} data={item} />)
        : null}
    </Container>
  );
};
export default ActivitiesList;
