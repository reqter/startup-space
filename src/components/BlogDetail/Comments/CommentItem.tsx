import { useState, useEffect } from "react";
import {
  CommentItemWrpapper,
  Image,
  Info,
  Name,
  Date,
  Message,
} from "./styles";

import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";

const CommentItem = ({ data }) => {
  return (
    <CommentItemWrpapper>
      <Image src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg" />
      <Info>
        <Name>Jean Doe</Name>
        <Date>JANUARY 9, 2018 AT 2:21PM</Date>
        <Message>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia,
          fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
          necessitatibus, nihil?
        </Message>
      </Info>
    </CommentItemWrpapper>
  );
};
export default CommentItem;
