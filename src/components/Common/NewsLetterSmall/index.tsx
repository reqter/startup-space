import {
  NewsLetterWrapper,
  NewsLetterContent,
  Text,
  InputWrapper,
  Input,
  Button,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const NewsLetterFAQ = () => {
  const { footerData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const footer = footerData ? footerData[0] : {};
  return (
    <NewsLetterWrapper>
      <NewsLetterContent>
        <Text>{getValue(footer, "subscribetitle")}</Text>
        <InputWrapper>
          <Input placeholder={getValue(footer, "subscribeinputplaceholder")} />
          <Button>{getValue(footer, "subscribeinputbtntext")}</Button>
        </InputWrapper>
      </NewsLetterContent>
    </NewsLetterWrapper>
  );
};
export default NewsLetterFAQ;
