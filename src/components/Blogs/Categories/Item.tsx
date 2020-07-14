import { Router } from "../../../../config/Next18Wrapper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CategoryItemWrapper, Text, Count } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const BlogsCatgeories = ({ data }) => {
  const { dir } = useGlobalState();
  const { getValue, paramsToValidValueType } = useObjectPropsValue();

  function handleCategoryClicked() {
    Router.push(`/blogs?categoryid=${data?._id}`);
  }

  return (
    <CategoryItemWrapper onClick={handleCategoryClicked}>
      <Text>{getValue(data, "name")}</Text>
      <Count>
        {dir === "ltr" ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </Count>
    </CategoryItemWrapper>
  );
};
export default BlogsCatgeories;
