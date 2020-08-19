import SidebarLayout from "../SidbarLayout";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const PopularPost = () => {
  const { blogsPageData, newestBlogs } = useGlobalState();
  const { getValue } = useObjectPropsValue();

  return (
    <SidebarLayout
      className="tab-port:hidden"
      title={getValue(blogsPageData, "recentpostboxtitle")}
    >
      {newestBlogs
        ? newestBlogs.map((item) => <Item key={item._id} item={item} />)
        : null}
    </SidebarLayout>
  );
};
export default PopularPost;
