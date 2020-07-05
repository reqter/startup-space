import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import { Button } from "./styles";
import Section from "../../Common/Section";
import SpacesList from "./SpacesList";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import VisibilitySensor from "react-visibility-sensor";

const Spaces = () => {
  const { getPopularOffices } = useGlobalApi();
  const { landingData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  const [dataList, setDataList] = React.useState<object[]>();

  function handleChange(isVisible: boolean) {
    if (isVisible)
      if (!dataList)
        getPopularOffices(0, 4, (result) => {
          setDataList(result);
        });
  }
  return React.useMemo(() => {
    return (
      <VisibilitySensor
        onChange={handleChange}
        partialVisibility={true}
        offset={{ bottom: -100 }}
      >
        {(isVisible) =>
          isVisible && (
            <Section
              bgColor={theme`colors.gray.100`}
              title={data.officesheading}
              header={data.officestitle}
            >
              <SpacesList officesData={dataList} />
              <Button>
                <Link href={`/offices`}>
                  {data && data.officesactiontext ? data.officesactiontext : ""}
                </Link>
              </Button>
            </Section>
          )
        }
      </VisibilitySensor>
    );
  }, [landingData, dataList]);
};
export default Spaces;