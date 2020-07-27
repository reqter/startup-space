import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import {
  FeatureItem,
  ImageContainer,
  Image,
  FeatureContent,
  Name,
  Location,
} from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const Feature = ({ data }) => {
  const { currentLanguage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const bg = getValue(data, "images");
  const img = bg ? includeImageBaseUrl(bg[0], "image", 70, 60) : "";
  return (
    <FeatureItem
      target="_blank"
      rel="noopener noreferrer"
      href={`/${currentLanguage}/offices/${data ? data.partnerkey : ""}`}
    >
      <ImageContainer>
        <Image bgImage={img} />
      </ImageContainer>
      <FeatureContent>
        <Name>{getValue(data, "name")}</Name>
        <Location>{getValue(data, "fullname")}</Location>
      </FeatureContent>
    </FeatureItem>
  );
};

export default Feature;
