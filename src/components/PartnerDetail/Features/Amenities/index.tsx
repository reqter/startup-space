import React from "react";
import Icon from "components/Common/Icon";
import LayoutBox from "../../LayoutBox";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { AmenitiesContainer, Amenit, Name } from "./styles";

const Amenities = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    [partnerDetailPage]
  );
  return partnerDetail &&
    partnerDetail.amenities &&
    partnerDetail.amenities.length ? (
    <LayoutBox title={getValue(data, "amenitiesboxtitle")}>
      <AmenitiesContainer>
        {partnerDetail.amenities.map((item, index) => (
          <Amenit key={index}>
            <Icon name={getValue(item, "fields.icon")} />
            <Name>{getValue(item, "fields.name")}</Name>
          </Amenit>
        ))}
      </AmenitiesContainer>
    </LayoutBox>
  ) : null;
};
export default Amenities;
