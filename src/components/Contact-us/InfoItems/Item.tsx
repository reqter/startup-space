import { InfoItem, Icon, Title, Description, Email } from "./styles";

const InfoItemCard = ({
  icon,
  title,
  description,
  isEmail,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isEmail?: boolean;
}) => {
  return (
    <InfoItem>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      {isEmail ? (
        <Email href={`mailto:${description}`}>{description}</Email>
      ) : (
        <Description>{description}</Description>
      )}
    </InfoItem>
  );
};

export default InfoItemCard;
