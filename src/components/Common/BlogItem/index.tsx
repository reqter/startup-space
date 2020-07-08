import React from "react";
import { CardWrapper } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const BlogCard = ({ data, actionName, colSpan = 3 }) => {
  const { currentLanguage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img =
    data && data.thumbnail
      ? includeImageBaseUrl(data.thumbnail[0], "image", 500, 250)
      : "";
  return (
    <CardWrapper colSpan={colSpan}>
      <div className="flex flex-col h-full">
        <div style={{ height: 250 }}>
          <img className="h-full bg-cover" src={img} alt="" />
        </div>
        <div className="px-6 py-4 flex-1">
          <div className="font-bold text-xl mb-2">{data.name}</div>
        </div>
        <div className="px-6 py-4 flex flex-row-reverse">
          <a
            href={`blogs/${data?._id}`}
            className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer"
          >
            {actionName}
          </a>
        </div>
      </div>
    </CardWrapper>
  );
};
export default BlogCard;
