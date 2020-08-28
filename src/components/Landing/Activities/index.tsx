import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import { Button } from "./styles";
import Section from "../../Common/Section";
import SpacesList from "./List";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Spaces = () => {
  const { _getActivitiesData } = useGlobalApi();
  const { landingData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  const [dataList, setDataList] = React.useState<object[]>();
  React.useEffect(() => {
    _getActivitiesData(0, 6, (result) => {
      setDataList(result);
    });
  }, []);

  return data.isenabledactivities ? (
    <Section
      bgColor={theme`colors.white`}
      title={getValue(data, "activitiesheading")}
      header={getValue(data, "activitiestitle")}
    >
      <SpacesList data={dataList} />
      <Button>
        <Link href={`/offices`}>{getValue(data, "activitiesactionstext")}</Link>
      </Button>
    </Section>
  ) : null;
};
export default Spaces;
