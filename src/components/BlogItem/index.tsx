import React from "react";
import { CardWrapper } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const BlogCard = ({ data, actionName }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img = data.thumbnail
    ? includeImageBaseUrl(data.thumbnail[0], "image", 500, 250)
    : "";
  return (
    <CardWrapper>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div style={{ height: 250 }}>
          <img className="h-full bg-cover" src={img} alt="" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.name}</div>
        </div>
        <div className="px-6 py-4 flex flex-row-reverse">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {actionName}
          </span>
        </div>
      </div>
    </CardWrapper>
  );
};
export default BlogCard;
