import React from "react";
import { Link } from "../../../../../config/Next18Wrapper";
import { CardWrapper, Image, Content, Name } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const ActivityItem = ({ data }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const bg = getValue(data, "thumbnail");
  const img = bg ? includeImageBaseUrl(bg[0], "image", 500, 300) : "";
  return (
    <Link href={`/offices?collaborationtypes=${data._id}`}>
      <CardWrapper>
        <Image bgImage={img} />
        <Content>
          <Name>{getValue(data, "name")}</Name>
        </Content>
      </CardWrapper>
    </Link>
  );
};
export default ActivityItem;
