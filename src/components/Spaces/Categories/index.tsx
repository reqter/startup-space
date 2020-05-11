import React from "react";
import { List, Item } from "./styles";
const ListItem = ({ data }) => {
  return <Item selected={data.selected}>{data.name}</Item>;
};
const Categories = ({
  data = [
    { name: "همه", selected: true },
    { name: "صادرات" },
    { name: "واردات" },
    { name: "منابع انسانی" },
    { name: "سرمایه گذاری" },
    { name: "گردشگری" },
    { name: "سلامت" },
  ],
}) => {
  return (
    data && (
      <List>
        {data.map((item, index) => {
          return <ListItem key={index} data={item} />;
        })}
      </List>
    )
  );
};
export default Categories;
