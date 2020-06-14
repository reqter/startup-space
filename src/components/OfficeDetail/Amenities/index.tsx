import React from "react";
import {
  IoMdBook,
  IoIosPin,
  IoIosPrint,
  IoIosHeart,
  IoMdEye,
} from "react-icons/io";
import LayoutBox from "../LayoutBox";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import { AmenitiesContainer, Amenit, Name } from "./styles";

const Amenities = () => {
  const {
    partnerDetail,
    partnerDetailPage,
    currentLanguage,
  } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return partnerDetail &&
    partnerDetail.amenities &&
    partnerDetail.amenities.length ? (
    <LayoutBox title={data.amenitiesboxtitle}>
      <AmenitiesContainer>
        {partnerDetail.amenities.map((item, index) => (
          <Amenit key={index}>
            <IoMdBook />
            <Name>
              {item.fields &&
              item.fields.name &&
              item.fields.name[currentLanguage]
                ? item.fields.name[currentLanguage]
                : item.fields.name}
            </Name>
          </Amenit>
        ))}
      </AmenitiesContainer>
    </LayoutBox>
  ) : null;
};
export default Amenities;
