import React from "react";
import {
  FeatureItem,
  ImageContainer,
  Image,
  FeatureContent,
  Name,
  Location,
} from "./styles";
const Feature = ({ data }) => {
  return (
    <FeatureItem>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <FeatureContent>
        <Name>{data.name}</Name>
        <Location>{data.fullname}</Location>
      </FeatureContent>
    </FeatureItem>
  );
};

export default Feature;
