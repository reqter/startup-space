import React from "react";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import { Title, Divider } from "./styles";
import LayoutBox from "../../LayoutBox";

const NewOffices = () => {
  const { getOffices } = useGlobalApi();
  const { getValue } = useObjectPropsValue();
  const { partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    [partnerDetailPage]
  );
  const [dataList, setDataList] = React.useState([]);
  React.useEffect(() => {
    getOffices(0, 5, {}, (result) => {
      setDataList(result);
    });
  }, []);
  return (
    <LayoutBox width={370}>
      <Title>{getValue(data, "newofficestitle")}</Title>
      <Divider />
      {dataList &&
        dataList.map((item, index) => <Item key={index} data={item} />)}
    </LayoutBox>
  );
};
export default NewOffices;
