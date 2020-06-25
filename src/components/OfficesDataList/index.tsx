import React from "react";
import { useRouter } from "next/router";
import Section from "../Common/Section";
import FilterBox from "./FilterBox";
import List from "./List";
import { Content } from "./styles";
import useGlobalApi from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const limit = 20;
const Spaces = () => {
  const {
    partnersPageUrlQuery,
    needsUrlQueryToConvert,
    searchFormContentType,
  } = useGlobalState();
  const { paramsToValidValueType } = useObjectPropsValue();
  const { query } = useRouter();
  const [skip, setSkip] = React.useState(0);
  const [dataList, setData] = React.useState<object[]>();
  const [queryParams, setQueryParams] = React.useState<object>();
  const { getOffices } = useGlobalApi();

  React.useEffect(() => {
    let params = {};
    if (needsUrlQueryToConvert) {
      const _fields =
        searchFormContentType && searchFormContentType.fields
          ? searchFormContentType.fields
          : [];
      const fields = _fields.filter(
        (item) =>
          item.name !== "name" &&
          item.name !== "actionstitle" &&
          item.name !== "action1text" &&
          item.name !== "action2text"
      );
      let p;
      if (partnersPageUrlQuery) {
        p = partnersPageUrlQuery;
      } else {
        p = Object.keys(query).reduce((acc, key) => {
          const q = fields.find((f) => f.name === key);
          if (q) {
            acc[key] = query[key];
          }
          return acc;
        }, {});
      }
      params = paramsToValidValueType(fields, p);
    } else {
      params = partnersPageUrlQuery;
    }
    getOffices(skip, limit, params, (data) => {
      setData(data);
    });
  }, [query]);

  function handleMoreDataClicked() {
    setSkip((prev) => prev + 1);
    getOffices((skip + 1) * limit, limit, {}, (data) => {
      setData((prev) => [...prev, ...data]);
    });
  }

  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Content>
        <List dataList={dataList} onMoreDataClicked={handleMoreDataClicked} />
        <FilterBox />
      </Content>
    </Section>
  );
};
export default Spaces;
