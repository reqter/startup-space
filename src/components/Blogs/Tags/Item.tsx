import { Router } from "../../../../config/Next18Wrapper";
import { TagItemWrapper } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Tags = ({ data }) => {
  const { getValue } = useObjectPropsValue();
  function handleTagClicked() {
    Router.push(`/blogs?tags=${data._id}`);
  }
  return (
    <TagItemWrapper onClick={handleTagClicked}>
      {getValue(data, "name")}
    </TagItemWrapper>
  );
};
export default Tags;
