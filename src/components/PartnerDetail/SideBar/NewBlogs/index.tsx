import React from "react";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { Title, Divider } from "./styles";
import LayoutBox from "../../LayoutBox";

const NewOffices = () => {
  const { partnerDetailPage, newestBlogs } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    [partnerDetailPage]
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
