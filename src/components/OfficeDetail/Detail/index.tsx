import React from "react";
import LayoutBox from "../LayoutBox";
import { DetailContainer, Row, Key, Value } from "./styles";
const Detail = () => {
  const list = [
    {
      key: "شناسه ملک :",
      value: "ZOAC26",
    },
    {
      key: "قیمت ملک:",
      value: "450,000 تومان77 تومان هر متر",
    },
    {
      key: "نوع ملک :",
      value: "آپارتمان",
    },
    {
      key: "وضعیت ملک :",
      value: "فروش",
    },
    {
      key: "مساحت ملک :",
      value: "750",
    },
    {
      key: "اندازه زمین :",
      value: "1250",
    },
    {
      key: "تعداد اتاق :",
      value: "2",
    },
    {
      key: "تعداد خواب ها :",
      value: "2",
    },
    {
      key: "تعداد حمام :",
      value: "3",
    },
    {
      key: "تعداد گاراژ :",
      value: "1",
    },
  ];
  return (
    <LayoutBox title="جزئیات">
      <DetailContainer>
        {list &&
          list.map((item, index) => (
            <Row key={index}>
              <Key>{item.key}</Key>
              <Value>{item.value}</Value>
            </Row>
          ))}
      </DetailContainer>
    </LayoutBox>
  );
};
export default Detail;
