import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AlertWrapper, Icon, Title, Info, AlertButton } from "./styles";
const Alert = ({ title, info, btnText, onClose }) => {
  return (
    <AlertWrapper>
      <Icon>
        <IoMdCheckmarkCircleOutline />
      </Icon>
      <Title>{title}</Title>
      <Info>{info}</Info>
      <AlertButton onClick={onClose}>{btnText}</AlertButton>
    </AlertWrapper>
  );
};
export default Alert;
