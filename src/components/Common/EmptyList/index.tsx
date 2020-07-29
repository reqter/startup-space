import { Wrapper, Image, Text } from "./styles";
const EmptyList = ({ image, text }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default EmptyList;
