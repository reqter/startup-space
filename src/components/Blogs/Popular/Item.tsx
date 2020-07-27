import { Link } from "../../../../config/Next18Wrapper";
import { PopularItemWrapper, Image, Text } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const PopularItem = ({ item }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img = item.thumbnail
    ? includeImageBaseUrl(item.thumbnail[0], "image", 120, 120)
    : "";
  function handleItemClicked() {}
  return (
    <Link
      href={`/blogs/${item ? (item.slug ? item.slug : item._id) : item._id}`}
    >
      <PopularItemWrapper onClick={handleItemClicked}>
        <Image src={img} />
        <Text>{getValue(item, "name")}</Text>
      </PopularItemWrapper>
    </Link>
  );
};
export default PopularItem;
