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
    partnersStickySideBar,
  } = useGlobalState();
  const { paramsToValidValueType } = useObjectPropsValue();
  const { query } = useRouter();
  const [dataLength, setDataLength] = React.useState(0);
  const [skip, setSkip] = React.useState(0);
  const [dataList, setData] = React.useState<object[]>();
  const [loading, toggleLoading] = React.useState(true);
  const { getOffices } = useGlobalApi();

  React.useEffect(() => {
    if (!loading) {
      toggleLoading(true);
    }
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
    if (
      partnersPageUrlQuery &&
      partnersPageUrlQuery["fullname"] &&
      partnersPageUrlQuery["fullname"].length
    ) {
      params["fullname"] = partnersPageUrlQuery["fullname"];
    }
    getOffices(skip, limit, params, (data) => {
      toggleLoading(false);
      setData(data);
      setDataLength(data ? data.length : 0);
    });
  }, [query]);

  function handleMoreDataClicked() {
    setSkip((prev) => prev + 1);
    getOffices((skip + 1) * limit, limit, {}, (data) => {
      setData((prev) => [...prev, ...data]);
      setDataLength(data ? data.length : 0);
    });
  }

  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Content
        isSideSticky={
          !dataList || dataList.length < 2 ? false : partnersStickySideBar
        }
      >
        <List
          dataList={dataList}
          loading={loading}
          onMoreDataClicked={handleMoreDataClicked}
          showMoreButton={dataLength === limit}
        />
        <FilterBox dataList={dataList} />
      </Content>
    </Section>
  );
};
export default Spaces;
