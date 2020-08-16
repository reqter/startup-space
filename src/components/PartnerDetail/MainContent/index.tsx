import Section from "../../Common/Section";
import Features from "../Features";
import SideBar from "../SideBar";
import { Main } from "./styles";

const MainContent = () => {
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Main>
        <Features />
        <div className="tab-port:hidden">
          <SideBar />
        </div>
      </Main>
    </Section>
  );
};
export default MainContent;
