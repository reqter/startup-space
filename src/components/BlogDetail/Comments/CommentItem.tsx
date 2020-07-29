import UserIcon from "components/Common/UserIcon";
import { CommentItemWrpapper, Info, Name, Date, Message } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useDate from "hooks/useDate";

const CommentItem = ({ data }) => {
  const { getValue } = useObjectPropsValue();
  const { dateFromNow } = useDate();

  return (
    <CommentItemWrpapper>
      <UserIcon />
      <Info>
        <Name>{getValue(data, "name")}</Name>
        <Date>{dateFromNow(getValue(data, "issuedate"))}</Date>
        <Message>{getValue(data, "body")}</Message>
      </Info>
    </CommentItemWrpapper>
  );
};
export default CommentItem;
