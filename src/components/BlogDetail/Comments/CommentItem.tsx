import {
  CommentItemWrpapper,
  Image,
  Info,
  Name,
  Date,
  Message,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const CommentItem = ({ data }) => {
  const { getValue } = useObjectPropsValue();
  console.log(data);
  return (
    <CommentItemWrpapper>
      <Image src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg" />
      <Info>
        <Name>{getValue(data, "name")}</Name>
        <Date>{getValue(data, "issuedate")}</Date>
        <Message>{getValue(data, "body")}</Message>
      </Info>
    </CommentItemWrpapper>
  );
};
export default CommentItem;
