import React from "react";
import Input from "../Form/Input";
import { Wrapper, Content, Actions, Button } from "./styles";
const FilterBox = () => {
  return (
    <Wrapper>
      <Content>
        <Input title="شهر" placeholder="شهر خودرا انتخاب کنید" autoFocus />
        <Input title="نوع" />
        <Input title="تعداد نفرات" />
        <Input title="امکانات درخواستی" />
        <Input title="مناطق مورد نظر" />
        <Actions>
          <Button>جستجو</Button>
          <Button>استعلام قیمت</Button>
        </Actions>
      </Content>
    </Wrapper>
  );
};
export default FilterBox;
