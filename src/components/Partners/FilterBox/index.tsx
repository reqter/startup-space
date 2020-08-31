import React from "react";
import { Router } from "../../../../config/Next18Wrapper";
import Form from "components/Common/Form";
import FullSearchInput from "components/Common/Form/components/SearchNameBox";
import {
  Wrapper,
  Content,
  Title,
  Divider,
  Actions,
  Button,
  ActionsTitle,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import { useRouter } from "next/router";

const FilterBox = ({ dataList }) => {
  const { query } = useRouter();
  const {
    searchFormContentType = {},
    currentLanguage,
    partnersPageData,
    partnersPageUrlQuery,
    needsUrlQueryToConvert,
    partnersStickySideBar,
    isVisibleFooter,
  } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const {
    getValue,
    paramsToValidValueType,
    objectToQuerystring,
  } = useObjectPropsValue();

  const nameField = () => {
    return searchFormContentType && searchFormContentType.fields
      ? searchFormContentType.fields.find((item) => item.name === "name")
      : {};
  };
  const [fullName, setFullName] = React.useState(
    partnersPageUrlQuery ? partnersPageUrlQuery[nameField().name] : ""
  );
  const actionsTitle = () =>
    searchFormContentType && searchFormContentType.fields
      ? searchFormContentType.fields.find(
          (item) => item.name === "actionstitle"
        )
      : {};

  const action1 = () =>
    searchFormContentType && searchFormContentType.fields
      ? searchFormContentType.fields.find((item) => item.name === "action1text")
      : {};

  const restField = (): object[] => {
    return searchFormContentType && searchFormContentType.fields
      ? searchFormContentType.fields.filter(
          (item) =>
            item.name !== "name" &&
            item.name !== "actionstitle" &&
            item.name !== "action1text" &&
            item.name !== "action2text"
        )
      : [searchFormContentType];
  };
  const formRef = React.useRef(null);
  const getParams = () => {
    if (!needsUrlQueryToConvert) {
      return partnersPageUrlQuery;
    }
    const params = partnersPageUrlQuery || query;
    if (params) {
      const keys = Object.keys(params);
      if (keys && keys.length) {
        const newobj = paramsToValidValueType(restField(), params);
        return newobj;
      }
    }
    return {};
  };

  function handleFilterData() {
    const values = formRef.current.getValues();
    if (fullName && fullName.length) {
      values[nameField().name] = fullName;
    }
    dispatch({
      type: "SET_PARTNERS_QUERY_DATA",
      payload: {
        data: null,
        isNeedConvert: true,
      },
    });
    const s = objectToQuerystring(values);
    Router.push(`/offices${s && s.length ? s : ""}`, undefined, {
      shallow: true,
    });
    // onSearchButtonClicked(values);
  }
  function handleFullNameChanged(e) {
    setFullName(e.target.value);
  }

  return (
    <Wrapper
      isSideSticky={
        !dataList || dataList.length <= 4 ? false : partnersStickySideBar
      }
      isVisibleFooter={
        !dataList || dataList.length <= 4 ? false : isVisibleFooter
      }
    >
      <Content>
        <Title>{getValue(partnersPageData, "searchboxtitle")}</Title>
        <Divider />
        <FullSearchInput
          data={nameField()}
          initValue={fullName}
          onChange={handleFullNameChanged}
          onSearchClicked={handleFilterData}
          isBlack={false}
        />
        <Form
          ref={formRef}
          mode="edit"
          rowColumns={1}
          filters={{}}
          initialValues={getParams}
          fieldsArray={restField()}
        />
        <ActionsTitle>
          {actionsTitle().title && actionsTitle().title[currentLanguage]}
        </ActionsTitle>
        <Actions>
          <Button onClick={handleFilterData}>
            {action1().title && action1().title[currentLanguage]}
          </Button>
        </Actions>
      </Content>
    </Wrapper>
  );
};
export default FilterBox;
