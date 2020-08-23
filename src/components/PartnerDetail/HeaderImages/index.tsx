import useObjectPropsValue from "hooks/useObjectPropsValue";
import { Wrapper, Left, ImageLeft, Right, ImageRight } from "./styles";
const HeaderImages = ({ data }) => {
  const { includeImageBaseUrl } = useObjectPropsValue();
  if (!data || !data.length) {
    return null;
  }
  const imageLeft = includeImageBaseUrl(data[0], "image", 1024, 420);
  const imageRight1 = includeImageBaseUrl(data[1], "image", 1024, 210);
  const imageRight2 = includeImageBaseUrl(data[2], "image", 1024, 210);
  const imageRight3 = includeImageBaseUrl(data[3], "image", 1024, 210);
  const imageRight4 = includeImageBaseUrl(data[4], "image", 1024, 210);
  return (
    <Wrapper>
      <Left>
        <ImageLeft src={imageLeft} />
      </Left>
      <Right>
        <ImageRight src={imageRight1} />
        <ImageRight src={imageRight2} />
        <ImageRight src={imageRight3} />
        <ImageRight src={imageRight4} />
      </Right>
    </Wrapper>
  );
};

export default HeaderImages;
