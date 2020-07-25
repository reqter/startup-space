import Section from "components/Common/Section";
import { Link } from "../../../config/Next18Wrapper";
import { Container, Image, Title, Description, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";

const ContentNotFound = () => {
  const { notFoundPageInfo, landingData } = useGlobalState();
  const { getHomeData } = useGlobalApi();
  const { includeImageBaseUrl, getValue } = useObjectPropsValue();
  const img =
    notFoundPageInfo && notFoundPageInfo.image
      ? includeImageBaseUrl(notFoundPageInfo.image[0], "image", 500, 500)
      : "";
  function handleClick() {
    if (!landingData || landingData.length === 0) getHomeData();
  }
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <Container>
        <Image src={img} />
        <Title>{getValue(notFoundPageInfo, "title")}</Title>
        <Description>{getValue(notFoundPageInfo, "description")}</Description>
        <Button onClick={handleClick}>
          <Link href={"/"}>
            {getValue(notFoundPageInfo, "actionbuttontext")}
          </Link>
        </Button>
      </Container>
    </Section>
  );
};
export default ContentNotFound;
