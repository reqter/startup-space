import { useState, useEffect } from "react";
import { CommentsContainer, Title } from "./styles";
import CommentItem from "./CommentItem";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";

const BlogDetailComments = () => {
  return (
    <CommentsContainer>
      <Title>6 Comments</Title>
      {[1, 1, 1].map((item) => (
        <CommentItem data={item} />
      ))}
    </CommentsContainer>
  );
};
export default BlogDetailComments;
