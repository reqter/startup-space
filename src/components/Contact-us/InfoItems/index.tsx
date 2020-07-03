import Section from "components/Common/Section";
import { InfoItemsContainer } from "./styles";
import { IoMdBook, IoIosPin, IoIosHeadset } from "react-icons/io";
import InfoItem from "./Item";
const InfoItems = () => {
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <InfoItemsContainer>
        <InfoItem
          icon={<IoMdBook />}
          title="About"
          description="Lorem ipsum dolor sit amet,consectetur adipiscingelit. Suspendisse"
        />
        <InfoItem
          icon={<IoIosHeadset />}
          title="E-Mail"
          description="Lorem ipsum dolor sit amet,consectetur adipiscingelit. Suspendisse"
        />
        <InfoItem
          icon={<IoIosPin />}
          title="Address"
          description="Lorem ipsum dolor sit amet,consectetur adipiscingelit. Suspendisse"
        />
      </InfoItemsContainer>
    </Section>
  );
};

export default InfoItems;
