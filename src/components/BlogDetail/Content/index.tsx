import Section from "components/Common/Section";
import { Container } from "./styles";
import Detail from "../Detail";
import SideBar from "../../Blogs/SideBar";
import RelatedBlogs from "../RelatedBlogs";

const Content = () => {
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <Container>
        <Detail />
        <div className="tab-port:hidden">
          <SideBar />
        </div>
      </Container>
      <RelatedBlogs />
    </Section>
  );
};
export default Content;
