import { PopularItemWrapper, Image, Text } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const PopularItem = ({ item }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img = item.thumbnail
    ? includeImageBaseUrl(item.thumbnail[0], "image", 120, 120)
    : "";
  return (
    <PopularItemWrapper>
      <Image src={img} />
      <Text>{item.name}</Text>
    </PopularItemWrapper>
  );
};
export default PopularItem;
