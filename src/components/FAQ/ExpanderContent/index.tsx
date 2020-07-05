import Section from "./../../Common/Section";
import { ExpanderContainer } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import ExpanderItem from "./Item";
const ExpanderFAQ = () => {
  const { faqsData } = useGlobalState();
  return (
    <Section bgColor={theme`colors.white`}>
      <ExpanderContainer>
        {faqsData &&
          faqsData.map((item, index) => (
            <ExpanderItem key={index} item={item} />
          ))}
      </ExpanderContainer>
    </Section>
  );
};
export default ExpanderFAQ;
