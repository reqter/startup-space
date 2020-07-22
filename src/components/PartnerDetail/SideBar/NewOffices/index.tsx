import React from "react";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import {
  Content,
  Title,
  Divider,
  Actions,
  Button,
  ActionsTitle,
} from "./styles";
import LayoutBox from "../../LayoutBox";

const NewOfficess = () => {
  const { getOffices } = useGlobalApi();
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  const [dataList, setDataList] = React.useState([]);
  React.useEffect(() => {
    getOffices(0, 5, {}, (result) => {
      setDataList(result);
    });
  }, []);
  return (
    <LayoutBox width={370}>
      <Title>فضاهای جدید</Title>
      <Divider />
      {dataList &&
        dataList.map((item, index) => <Item key={index} data={item} />)}
    </LayoutBox>
  );
};
export default NewOfficess;
