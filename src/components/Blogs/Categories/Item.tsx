import { CategoryItemWrapper, Text, Count } from "./styles";
import SidebarLayout from "../SidbarLayout";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const BlogsCatgeories = ({ data }) => {
  const { getValue, paramsToValidValueType } = useObjectPropsValue();

  return (
    <CategoryItemWrapper>
      <Text>{data.title}</Text>
      <Count>({data.count})</Count>
    </CategoryItemWrapper>
  );
};
export default BlogsCatgeories;
