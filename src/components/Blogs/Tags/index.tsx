import { TagsContainer } from "./styles";
import SidebarLayout from "../SidbarLayout";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { isTabPort, isPhone } from "utils";

const Tags = () => {
  const { blogsPageData, tags } = useGlobalState();
  const { getValue } = useObjectPropsValue();

  return (
    <SidebarLayout
      className="phone:hidden"
      title={getValue(blogsPageData, "tagsboxtitle")}
    >
      <TagsContainer>
        {tags
          ? tags.map((item, index) => <Item key={index} data={item} />)
          : null}
      </TagsContainer>
    </SidebarLayout>
  );
};
export default Tags;
