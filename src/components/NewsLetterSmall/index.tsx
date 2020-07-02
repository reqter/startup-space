import {
  NewsLetterWrapper,
  NewsLetterContent,
  Text,
  InputWrapper,
  Input,
  Button,
} from "./styles";
const NewsLetterFAQ = () => {
  return (
    <NewsLetterWrapper>
      <NewsLetterContent>
        <Text>Newsletter – Get Updates & Latest News</Text>
        <InputWrapper>
          <Input placeholder="Email Address" />
          <Button>Subscribe</Button>
        </InputWrapper>
      </NewsLetterContent>
    </NewsLetterWrapper>
  );
};
export default NewsLetterFAQ;
