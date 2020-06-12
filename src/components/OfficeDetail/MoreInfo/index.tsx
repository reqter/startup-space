import React from "react";
import {
  IoMdTime,
  IoIosPin,
  IoIosPrint,
  IoIosHeart,
  IoMdEye,
} from "react-icons/io";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import LayoutBox from "../LayoutBox";
import { Title, Row, Rule } from "./styles";

const MoreInfo = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox title={data.thingstoknowboxtitle}>
      <Title>قوانین فضای کار</Title>
      <Row>
        <IoMdTime />
        <Rule>شنبه تا جمعه</Rule>
      </Row>
      <Row>
        <IoMdTime />
        <Rule>از 8 صبح الی 24 </Rule>
      </Row>
      <Row>
        <IoMdTime />
        <Rule>استعمال سیگار بلامانع است </Rule>
      </Row>
      <Row>
        <IoMdTime />
        <Rule>ورود با حیوانات خانگی ممنوع می باشد </Rule>
      </Row>
      <br />
      <Title>قوانین لغو رزور </Title>
      <Row>
        <Rule>لغو رایگان رزور تا 48 ساعت </Rule>
      </Row>
      <Row>
        <Rule>
          بعد از آن تا یک هفته اگر رزور خود را لغو کنید، 50% مبلغ به شما
          بازگردانده خواهد شد{" "}
        </Rule>
      </Row>
    </LayoutBox>
  );
};
export default MoreInfo;
