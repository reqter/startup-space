import React from "react";
import Card from "./Item";
import { Container } from "./styles";

const List = ({ dataList = [{}, {}, {}] }) => {
  return (
    <Container>
      {dataList &&
        dataList.map((item, index) => <Card key={index} data={item} />)}
    </Container>
  );
};
export default List;
