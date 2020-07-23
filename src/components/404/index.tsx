import Section from "components/Common/Section";
import { Link } from "../../../config/Next18Wrapper";
import { Container, Image, Title, Description, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const ContentNotFound = () => {
  const { includeImageBaseUrl, getValue } = useObjectPropsValue();
  const { notFoundPageInfo } = useGlobalState();
  const img =
    notFoundPageInfo && notFoundPageInfo.image
      ? includeImageBaseUrl(notFoundPageInfo.image[0], "image", 500, 500)
      : "";
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <Container>
        <Image src={img} />
        <Title>{getValue(notFoundPageInfo, "title")}</Title>
        <Description>{getValue(notFoundPageInfo, "description")}</Description>
        <Button>
          <Link href={"/"}>
            {getValue(notFoundPageInfo, "actionbuttontext")}
          </Link>
        </Button>
      </Container>
    </Section>
  );
};
export default ContentNotFound;
