import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { InfoItemsContainer } from "./styles";
import { IoMdBook, IoIosPin, IoIosHeadset } from "react-icons/io";
import InfoItem from "./Item";
const InfoItems = () => {
  const { contactUsPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  console.log(contactUsPageData);
  return (
    <InfoItemsContainer>
      <InfoItem
        icon={<IoMdBook />}
        title={getValue(contactUsPageData, "firstboxtitle")}
        description={getValue(contactUsPageData, "firtsboxdescription")}
      />
      <InfoItem
        isEmail
        icon={<IoIosHeadset />}
        title={getValue(contactUsPageData, "secondboxtitle")}
        description={getValue(contactUsPageData, "secondboxdescription")}
      />
      <InfoItem
        icon={<IoIosPin />}
        title={getValue(contactUsPageData, "thirdboxtitle")}
        description={getValue(contactUsPageData, "thirdboxdescription")}
      />
    </InfoItemsContainer>
  );
};

export default InfoItems;
