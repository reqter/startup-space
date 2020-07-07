import { TagsContainer } from "./styles";
import SidebarLayout from "../SidbarLayout";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const Tags = () => {
  const { getValue, paramsToValidValueType } = useObjectPropsValue();

  return (
    <SidebarLayout title="Tags">
      <TagsContainer>
        {[
          { name: "Travel" },
          { name: "Adventure" },
          { name: "Food" },
          { name: "Lifestyle" },
          { name: "Business" },
          { name: "Freelancing" },
          { name: "Travel" },
          { name: "Adventure" },
          { name: "Food" },
          { name: "Lifestyle" },
          { name: "Business" },
          { name: "Freelancing" },
        ].map((item) => (
          <Item data={item} />
        ))}
      </TagsContainer>
    </SidebarLayout>
  );
};
export default Tags;
