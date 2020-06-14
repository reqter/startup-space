import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { CommentWrapper, Top, Info, Profile, Name, Date, Text } from "./styles";

interface IComment {
  data: { name: string; body: string; rate: string };
}
const Comment = ({ data }: IComment) => {
  return (
    <CommentWrapper>
      <Top>
        <Profile src="https://assets.reqter.com/asset/download/file-1589438010203.jpeg" />
        <Info>
          <Name>{data.name}</Name>
          <Date>بیست روز قبل</Date>
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
