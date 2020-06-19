import React from "react";
import Section from "../Common/Section";
import FilterBox from "./FilterBox";
import List from "./List";
import { Content } from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
const limit = 5;
const Spaces = () => {
  const { partnersPageUrlQuery } = useGlobalState();
  const [skip, setSkip] = React.useState(0);
  const [dataList, setData] = React.useState<object[]>();
  const { getOffices } = useGlobalApi();

  React.useEffect(() => {
    const params = partnersPageUrlQuery;
    getOffices(skip, limit, {}, (data) => {
      setData(data);
    });
  }, []);

  function handleMoreDataClicked() {
    setSkip((prev) => prev + 1);
    getOffices((skip + 1) * limit, limit, {}, (data) => {
      setData((prev) => [...prev, ...data]);
    });
  }
  function handleFullNameClicked(text) {}
  function handleSearchButtonClicked(filteredData) {}
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Content>
        <List dataList={dataList} onMoreDataClicked={handleMoreDataClicked} />
        <FilterBox
          onFullNameClicked={handleFullNameClicked}
          onSearchButtonClicked={handleSearchButtonClicked}
        />
      </Content>
    </Section>
  );
};
export default Spaces;
