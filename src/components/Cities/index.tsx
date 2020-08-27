import Section from "../Common/Section";
import Description from "./Description";
import About from "./About";
import List from "./List";
import Map from "./Map";
import { Main } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const MainContent = () => {
  const { cityDetail } = useGlobalState();
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Main
        isImagesVisible={
          cityDetail && cityDetail.images && cityDetail.images.length
        }
      >
        <Description />
        <About />
        <List />
        <Map />
      </Main>
    </Section>
  );
};
export default MainContent;
