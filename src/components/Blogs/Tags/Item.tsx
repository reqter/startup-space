import { TagItemWrapper } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Tags = ({ data }) => {
  const { getValue } = useObjectPropsValue();
  return <TagItemWrapper>{getValue(data, "name")}</TagItemWrapper>;
};
export default Tags;
