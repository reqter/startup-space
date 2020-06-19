import React from "react";
import Form from "../../../components/Form";
import FullSearchInput from "../../Form/components/SearchNameBox";
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

const FilterBox = ({ onFullNameClicked, onSearchButtonClicked }) => {
  const {
    searchFormContentType = {},
    currentLanguage,
    partnersPageData,
    partnersPageUrlQuery,
  } = useGlobalState();
  const pdata = React.useMemo(
    () => (partnersPageData ? partnersPageData[0] : {}),
    []
  );
  const {
    getValue,
    urlParamsToObject,
    paramsToValidValueType,
  } = useObjectPropsValue();

  const nameField = () => {
    return searchFormContentType && searchFormContentType.fields
      ? searchFormContentType.fields.find((item) => item.name === "name")
      : {};
  };

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
      : [];
  };
  const formRef = React.useRef(null);
  const getParams = React.useMemo(() => {
    const params = partnersPageUrlQuery;
    if (params) {
      const keys = Object.keys(params);
      if (keys && keys.length) {
        const newobj = paramsToValidValueType(restField(), params);
        return newobj;
      }
    }
    return {};
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>{getValue(pdata, "searchboxtitle")}</Title>
        <Divider />
        <FullSearchInput data={nameField()} />
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
          <Button>{action1().title && action1().title[currentLanguage]}</Button>
        </Actions>
      </Content>
    </Wrapper>
  );
};
export default FilterBox;
