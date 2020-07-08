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

const FilterBox = ({ dataList }) => {
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
    partnersPageUrlQuery ? partnersPageUrlQuery["fullname"] : ""
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
      ? searchFormContentType.fields
          .filter(
            (item) =>
              item.name !== "name" &&
              item.name !== "actionstitle" &&
              item.name !== "action1text" &&
              item.name !== "action2text"
          )
          .map((item, index: number) => {
            if (index > 1) item.colSpan = 2;
            return item;
          })
      : [searchFormContentType];
  };
  const formRef = React.useRef(null);
  const getParams = React.useMemo(() => {
    if (!needsUrlQueryToConvert) {
      return partnersPageUrlQuery;
    }
    const params = partnersPageUrlQuery;
    if (params) {
      const keys = Object.keys(params);
      if (keys && keys.length) {
        const newobj = paramsToValidValueType(restField(), params);
        return newobj;
      }
    }
    return {};
  }, [searchFormContentType]);

  function handleFilterData() {
    const values = formRef.current.getValues();
    if (fullName && fullName.length) {
      values["fullname"] = fullName;
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
        !dataList || dataList.length < 2 ? false : partnersStickySideBar
      }
      isVisibleFooter={
        !dataList || dataList.length < 2 ? false : isVisibleFooter
      }
    >
      <Content>
        <Title>{getValue(partnersPageData, "searchboxtitle")}</Title>
        <Divider />
        <FullSearchInput
          data={nameField()}
          initValue={fullName}
          onChange={handleFullNameChanged}
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
