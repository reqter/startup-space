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
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";

const FilterBox = () => {
  const { searchFormContentType = {}, currentLanguage } = useGlobalState();
  const nameField = React.useMemo(
    () =>
      searchFormContentType && searchFormContentType.fields
        ? searchFormContentType.fields.find((item) => item.name === "name")
        : {},
    []
  );
  const actionsTitle = React.useMemo(
    () =>
      searchFormContentType && searchFormContentType.fields
        ? searchFormContentType.fields.find(
            (item) => item.name === "actionstitle"
          )
        : {},
    []
  );
  const action1 = React.useMemo(
    () =>
      searchFormContentType && searchFormContentType.fields
        ? searchFormContentType.fields.find(
            (item) => item.name === "action1text"
          )
        : {},
    []
  );
  const action2 = React.useMemo(
    () =>
      searchFormContentType && searchFormContentType.fields
        ? searchFormContentType.fields.find(
            (item) => item.name === "action2text"
          )
        : {},
    []
  );
  const restField = React.useMemo(
    () =>
      searchFormContentType && searchFormContentType.fields
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
        : {},
    []
  );
  const formRef = React.useRef(null);
  return (
    <Wrapper>
      <Content>
        <Title>Property Search</Title>
        <Divider />
        <FullSearchInput data={nameField} />
        <Form
          ref={formRef}
          mode="new"
          rowColumns={1}
          filters={{}}
          initialValues={{}}
          fieldsArray={restField}
        />

        <ActionsTitle>{actionsTitle.title[currentLanguage]}</ActionsTitle>
        <Actions>
          <Button>{action1.title[currentLanguage]}</Button>
        </Actions>
      </Content>
    </Wrapper>
  );
};
export default FilterBox;
