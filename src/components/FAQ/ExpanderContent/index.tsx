import Section from "./../../Common/Section";
import { ExpanderContainer } from "./styles";
import ExpanderItem from "./Item";
const ExpancderFAQ = () => {
  return (
    <Section bgColor={theme`colors.white`}>
      <ExpanderContainer>
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <ExpanderItem key={index} />
        ))}
      </ExpanderContainer>
    </Section>
  );
};
export default ExpancderFAQ;
