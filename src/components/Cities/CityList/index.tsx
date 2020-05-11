import React from "react";
import Card from "./Item";
import { Container } from "./styles";

const CitiesList = ({
  dataList = [
    {
      image:
        "https://www.socialinnovationacademy.eu/wp-content/uploads/2018/06/cities.png",
      displayName: "Tehran",
      count: "2 Places",
    },
    {
      image: "https://media.timeout.com/images/105404079/630/472/image.jpg",
      displayName: "Shiraz",
      count: "5 Places",
    },
    {
      image: "https://bgfons.com/uploads/city/city_texture6407.jpg",
      displayName: "Esfahan",
      count: "7 Places",
    },
    ,
    {
      image:
        "https://en.unesco.org/creative-cities/sites/creative-cities/files/styles/creative_city_940_420/public/wuhan_0.jpg?itok=777IgyWR",
      displayName: "Mashhad",
      count: "16 Places",
    },
  ],
}) => {
  return (
    <Container>
      {dataList &&
        dataList.map((item, index) => <Card key={index} data={item} />)}
    </Container>
  );
};
export default CitiesList;
