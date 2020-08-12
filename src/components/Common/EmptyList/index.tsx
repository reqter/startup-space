import { Wrapper, Image, Title, Description } from "./styles";
interface IProps {
  image: string;
  text: string;
  description: string;
}
const EmptyList = ({ image, text, description }: IProps) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Title>{text}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default EmptyList;
