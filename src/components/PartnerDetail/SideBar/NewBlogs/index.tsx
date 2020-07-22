import React from "react";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import { Content, Title, Divider } from "./styles";
import LayoutBox from "../../LayoutBox";

const NewOfficess = () => {
  const { partnerDetail, partnerDetailPage, newestBlogs } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox width={370}>
      <Title>جدیدترین پست ها</Title>
      <Divider />
      {newestBlogs &&
        newestBlogs.map((item, index) => <Item key={index} item={item} />)}
    </LayoutBox>
  );
};
export default NewOfficess;
