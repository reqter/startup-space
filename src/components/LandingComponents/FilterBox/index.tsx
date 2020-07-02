import React from "react";
import { Router } from "../../../../config/Next18Wrapper";
import Form from "../../Form";
import FullSearchInput from "../../Form/components/SearchNameBox";
import { Wrapper, Content, Actions, Button, ActionsTitle } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const FilterBox = () => {
  const { searchFormContentType = {}, currentLanguage } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { objectToQuerystring } = useObjectPropsValue();
  const [fullName, setFullName] = React.useState("");
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

  const action2 = () =>
    searchFormContentType && searchFormContentType.fields
      ? searchFormContentType.fields.find((item) => item.name === "action2text")
      : {};

  const restField = React.useMemo((): object[] => {
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
  }, [searchFormContentType]);
  const formRef = React.useRef(null);

  function handleSearchClicked() {
    const values = formRef.current.getValues();
    if (fullName && fullName.length) {
      values["fullname"] = fullName;
    }
    dispatch({
      type: "SET_PARTNERS_QUERY_DATA",
      payload: {
        data: values,
        isNeedConvert: false,
      },
    });
    const s = objectToQuerystring(values);
    Router.push(`/offices${s && s.length ? s : ""}`);
  }
  function handleFullNameChanged(e) {
    setFullName(e.target.value);
  }
  return (
    <Wrapper>
      <Content>
        <FullSearchInput
          data={nameField()}
          initValue={fullName}
          onChange={handleFullNameChanged}
        />
        <Form
          ref={formRef}
          mode="filter"
          rowColumns={2}
          filters={{}}
          initialValues={{}}
          fieldsArray={restField}
        />

        <ActionsTitle>
          {actionsTitle().title && actionsTitle().title[currentLanguage]}
        </ActionsTitle>
        <Actions>
          <Button onClick={handleSearchClicked}>
            {action1().title && action1().title[currentLanguage]}
          </Button>
        </Actions>
      </Content>
    </Wrapper>
  );
};
export default FilterBox;
