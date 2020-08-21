import Section from "components/Common/Section";
import { Link } from "../../../../config/Next18Wrapper";
import { Container, Image, Title, Description, Button } from "./styles";

interface INotFound {
  image: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  action: () => void;
  url: string;
}

const NotFoundItem = ({
  image,
  title,
  description,
  actionText,
  action,
  url,
}: INotFound) => {
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <Container>
        <Image src={image} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button onClick={action}>
          <Link href={url}>{actionText}</Link>
        </Button>
      </Container>
    </Section>
  );
};
export default NotFoundItem;
