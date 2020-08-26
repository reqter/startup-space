import {
  Wrapper,
  ImageBox,
  Logo,
  TextBox,
  CityName,
  CityFullName,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Description = () => {
  const { cityDetailPage, cityDetail } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img =
    cityDetail && cityDetail.thumbnail
      ? includeImageBaseUrl(cityDetail.thumbnail[0], "image", 120, 120)
      : "";
  return (
    <Wrapper>
      <ImageBox>
        <Logo src={img} />
      </ImageBox>
      <TextBox>
        <CityName>{getValue(cityDetail, "name")}</CityName>
        <CityFullName>{getValue(cityDetail, "fullname")}</CityFullName>
      </TextBox>
    </Wrapper>
  );
};

export default Description;
