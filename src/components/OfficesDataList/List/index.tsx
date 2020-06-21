import React from "react";
import Card from "./Item";
import { Container, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const SpacesList = ({ dataList = [], onMoreDataClicked }) => {
  const { partnersPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();

  return (
    <Container>
      {dataList ? (
        <>
          {dataList.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </>
      ) : null}
      {dataList.length > 0 && (
        <div className="w-full flex justify-center">
          <Button onClick={onMoreDataClicked}>
            {getValue(partnersPageData, "pagingactiontitle")}
          </Button>
        </div>
      )}
    </Container>
  );
};
export default SpacesList;
