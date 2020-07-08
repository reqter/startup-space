import { SideBarContainer } from "./styles";
import Categories from "../Categories";
import PopularPost from "../Popular";
import Tags from "../Tags";
const BlogsSideBar = () => {
  return (
    <SideBarContainer>
      <Categories />
      <PopularPost />
      <Tags />
    </SideBarContainer>
  );
};
export default BlogsSideBar;
