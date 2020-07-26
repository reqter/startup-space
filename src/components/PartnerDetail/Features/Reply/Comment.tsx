import UserIcon from "components/Common/UserIcon";
import StarRatingComponent from "react-star-rating-component";
import { CommentWrapper, Top, Info, Name, Date, Text } from "./styles";

interface IComment {
  data: { name: string; body: string; rate: string; issuedate: string };
}
const Comment = ({ data }: IComment) => {
  return (
    <CommentWrapper>
      <Top>
        <UserIcon />
        <Info>
          <Name>{data.name}</Name>
          <Date>{data.issuedate}</Date>
        </Info>
        <StarRatingComponent
          name="rate1"
          editing={false}
          starCount={5}
          value={parseInt(data.rate)}
        />
      </Top>
      <Text>{data.body}</Text>
    </CommentWrapper>
  );
};
export default Comment;
