import { CategoriesContainer } from "./styles";
import SidebarLayout from "../SidbarLayout";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const BlogsCatgeories = () => {
  const { blogsPageData, blogsCategories } = useGlobalState();
  const { getValue } = useObjectPropsValue();

  return (
    <SidebarLayout title={getValue(blogsPageData, "categoriesboxtitle")}>
      <CategoriesContainer>
        {blogsCategories &&
          blogsCategories.map((item, index) => (
            <Item key={index} data={item} />
          ))}
      </CategoriesContainer>
    </SidebarLayout>
  );
};
export default BlogsCatgeories;
