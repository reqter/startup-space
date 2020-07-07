import { SideBarContainer } from "./styles";
import Categories from "../Categories";
import PopularPost from "../Popular";
import Tags from "../Tags";
const BlogsSideBar = ({ data }) => {
  return (
    <SideBarContainer>
      <Categories />
      <PopularPost data={data ? data : []} />
      <Tags />
    </SideBarContainer>
  );
};
export default BlogsSideBar;
