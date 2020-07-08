import {
  CardWrapper,
  Image,
  Content,
  Name,
  MetaData,
  Category,
  Date,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const RelatedBlogItem = ({ data }) => {
  const { currentLanguage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const bg = getValue(data, "images");
  const img = bg ? includeImageBaseUrl(bg[0], "image", 500, 300) : "";
  return (
    <CardWrapper target="_blank" rel="noopener noreferrer">
      <Image
        bgImage={
          "https://i.pinimg.com/originals/e1/aa/fd/e1aafd01659ea362247eadef32672a16.jpg"
        }
      />
      <Content>
        <MetaData>
          <Category>Food</Category>
          <Date>JANUARY 9, 2018</Date>
        </MetaData>
        <Name>There’s a Cool New Way for Men to Wear Socks and Sandals</Name>
      </Content>
    </CardWrapper>
  );
};
export default RelatedBlogItem;
