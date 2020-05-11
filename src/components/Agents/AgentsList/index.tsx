import React from "react";
import Card from "./Item";
import { Container } from "./styles";

const AgentsList = ({
  dataList = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg",
      displayName: "Tehran",
      count: "2 Places",
    },
    {
      image:
        "https://www.pioneernetwork.net/wp-content/uploads/2018/02/Lisa-Milliken-2018-260x300.png",
      displayName: "Shiraz",
      count: "5 Places",
    },
    {
      image:
        "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTY4MzU0NDMzMjc5NzMxNjcw/julian-castro-sergio-floresbloomberg-via-getty-images-square.jpg",
      displayName: "Esfahan",
      count: "7 Places",
    },
    ,
  ],
}) => {
  return (
    <Container>
      {dataList &&
        dataList.map((item, index) => <Card key={index} data={item} />)}
    </Container>
  );
};
export default AgentsList;
