import { TagItemWrapper } from "./styles";
import SidebarLayout from "../SidbarLayout";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const Tags = ({ data }) => {
  const { getValue, paramsToValidValueType } = useObjectPropsValue();

  return <TagItemWrapper>{data.name}</TagItemWrapper>;
};
export default Tags;
