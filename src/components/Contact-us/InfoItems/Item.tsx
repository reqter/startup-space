import { InfoItem, Icon, Title, Description } from "./styles";

const InfoItemCard = ({ icon, title, description }) => {
  return (
    <InfoItem>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </InfoItem>
  );
};

export default InfoItemCard;
