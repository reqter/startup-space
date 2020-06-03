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
import useGlobalState from "../../hooks/useGlobal/useGlobalState";

const NewsLetter = () => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Container>
        <ImageBox bgUrl={data.newslettermedia} />
        <FormBox>
          <Header>{data.newslettertitle}</Header>
          <Divider />
          <Description>{data.newsletterdescription}</Description>
          <Input placeholder={data.newsletterplaceholder} />
          <Button>{data.newsletteractiontext}</Button>
        </FormBox>
      </Container>
    </Section>
  );
};
export default NewsLetter;
