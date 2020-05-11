import React from "react";
import { Button } from "./styles";
import Section from "../Common/Section";
import CityList from "./CityList";
const Cities = ({}) => {
  return (
    <Section
      bgImage="/images/city.png"
      title="موقعیت"
      header="شهرهای اصلی فضای کاری"
    >
      <CityList />
      <Button>شهر های بیشتر</Button>
    </Section>
  );
};
export default Cities;
