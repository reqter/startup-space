import LayoutBox from "../LayoutBox";
import dynamic from "next/dynamic";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import {
  Wrapper,
  ImageBox,
  Logo,
  TextBox,
  CityName,
  CityFullName,
} from "./styles";
const HtmlViewer = dynamic(() => import("../../Common/TextEditorViewer"), {
  ssr: false,
});
const About = () => {
  const { cityDetailPage, cityDetail } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img =
    cityDetail && cityDetail.thumbnail
      ? includeImageBaseUrl(cityDetail.thumbnail[0], "image", 120, 120)
      : "";
  return (
    <LayoutBox>
      <Wrapper>
        <ImageBox>
          <Logo src={img} />
        </ImageBox>
        <TextBox>
          <CityName>{getValue(cityDetail, "name")}</CityName>
          <CityFullName>{getValue(cityDetail, "fullname")}</CityFullName>
        </TextBox>
      </Wrapper>
      <HtmlViewer content={getValue(cityDetail, "about")} />
    </LayoutBox>
  );
};

export default About;
