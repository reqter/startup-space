import React from "react";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import { Content, Title, Divider } from "./styles";
import LayoutBox from "../../LayoutBox";

const NewOffices = () => {
  const { partnerDetail, partnerDetailPage, newestBlogs } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox width={370}>
      <Title>{getValue(data, "newblogstitle")}</Title>
      <Divider />
      {newestBlogs &&
        newestBlogs.map((item, index) => <Item key={index} item={item} />)}
    </LayoutBox>
  );
};
export default NewOffices;
