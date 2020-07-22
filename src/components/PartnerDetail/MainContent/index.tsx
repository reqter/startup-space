import Section from "../../Common/Section";
import Features from "../Features";
import SideBar from "../SideBar";
import { Main } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const MainContent = () => {
  const { partnerDetailStickySideBar } = useGlobalState();
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Main>
        <Features />
        <SideBar />
      </Main>
    </Section>
  );
};
export default MainContent;
