import React from "react";
import Section from "../Common/Section";
import Divider from "../Common/Divider";
import {
  Container,
  FormBox,
  Header,
  Description,
  Input,
  Button,
  ImageBox,
} from "./styles";

const NewsLetter = () => {
  return (
    <Section bgColor={theme`colors.black`}>
      <Container>
        <ImageBox
          bgUrl={
            "https://www.munichre.com/content/dam/munichre/mram/images/AdobeStock_74327759.jpg/_jcr_content/renditions/original./AdobeStock_74327759.jpg"
          }
        />
        <FormBox>
          <Header>ثبت نام در خبرنامه</Header>
          <Divider />
          <Description>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </Description>
          <Input placeholder="ایمیل خود را وارد کنید" />
          <Button>مشترک شوید</Button>
        </FormBox>
      </Container>
    </Section>
  );
};
export default NewsLetter;
