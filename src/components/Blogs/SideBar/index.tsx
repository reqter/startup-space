import { SideBarContainer } from "./styles";
import Categories from "../Categories";
import PopularPost from "../Popular";
import Tags from "../Tags";
import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLDivElement> {}
const BlogsSideBar: React.FC<IProps> = ({ className }) => {
  return (
    <SideBarContainer className={className}>
      <Categories />
      <PopularPost />
      <Tags />
    </SideBarContainer>
  );
};
export default BlogsSideBar;
