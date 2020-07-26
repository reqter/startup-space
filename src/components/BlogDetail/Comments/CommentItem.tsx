import UserIcon from "components/Common/UserIcon";
import { CommentItemWrpapper, Info, Name, Date, Message } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const CommentItem = ({ data }) => {
  const { getValue } = useObjectPropsValue();
  return (
    <CommentItemWrpapper>
      <UserIcon />
      <Info>
        <Name>{getValue(data, "name")}</Name>
        <Date>{getValue(data, "issuedate")}</Date>
        <Message>{getValue(data, "body")}</Message>
      </Info>
    </CommentItemWrpapper>
  );
};
export default CommentItem;
