import { CategoriesContainer } from "./styles";
import SidebarLayout from "../SidbarLayout";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const BlogsCatgeories = () => {
  const { getValue, paramsToValidValueType } = useObjectPropsValue();

  return (
    <SidebarLayout title="Categories">
      <CategoriesContainer>
        {[
          { title: "Food", count: "12" },
          { title: "Travel", count: "3" },
          { title: "Adventure", count: "19" },
          { title: "Lifestyle", count: "5" },
          { title: "Workout", count: "2" },
        ].map((item) => (
          <Item data={item} />
        ))}
      </CategoriesContainer>
    </SidebarLayout>
  );
};
export default BlogsCatgeories;
