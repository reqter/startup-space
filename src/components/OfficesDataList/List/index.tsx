import React from "react";
import Card from "./Item";
import { Container } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
const SpacesList = () => {
  const [dataList, setData] = React.useState<object[]>();
  const { getOffices } = useGlobalApi();
  React.useEffect(() => {
    getOffices(5, (data) => {
      setData(data);
    });
  }, []);
  return (
    <Container>
      {dataList &&
        dataList.map((item, index) => <Card key={index} data={item} />)}
    </Container>
  );
};
export default SpacesList;
