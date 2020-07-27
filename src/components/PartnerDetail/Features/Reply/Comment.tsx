import UserIcon from "components/Common/UserIcon";
import StarRatingComponent from "react-star-rating-component";
import { CommentWrapper, Top, Info, Name, Date, Text } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";

interface IComment {
  data: { name: string; body: string; rate: string; issuedate: string };
}

const Comment = ({ data }: IComment) => {
  const { getValue } = useObjectPropsValue();
  return (
    <CommentWrapper>
      <Top>
        <UserIcon />
        <Info>
          <Name>{getValue(data, "name")}</Name>
          <Date>{getValue(data, "issuedate")}</Date>
        </Info>
        <StarRatingComponent
          name="rate1"
          editing={false}
          starCount={5}
          value={parseInt(data.rate)}
        />
      </Top>
      <Text>{getValue(data, "body")}</Text>
    </CommentWrapper>
  );
};
export default Comment;
