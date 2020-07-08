import { CategoryItemWrapper, Text, Count } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const BlogsCatgeories = ({ data }) => {
  const { getValue, paramsToValidValueType } = useObjectPropsValue();

  return (
    <CategoryItemWrapper>
      <Text>{getValue(data, "name")}</Text>
      <Count>({data.count})</Count>
    </CategoryItemWrapper>
  );
};
export default BlogsCatgeories;
