import {} from "./styles";
import SidebarLayout from "../SidbarLayout";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const PopularPost = ({ data }) => {
  const { getValue, paramsToValidValueType } = useObjectPropsValue();

  return (
    <SidebarLayout title="Popular Posts">
      {data ? data.map((item) => <Item item={item} />) : null}
    </SidebarLayout>
  );
};
export default PopularPost;
