import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import { CardWrapper } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const BlogCard = ({ data, actionName, colSpan = 3 }) => {
  const { _callBlogPageApis } = useBlogApi();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img =
    data && data.thumbnail
      ? includeImageBaseUrl(data.thumbnail[0], "image", 500, 250)
      : "";

  function handleClicked() {
    _callBlogPageApis(data._id);
  }
  return (
    <CardWrapper colSpan={colSpan}>
      <div className="flex flex-col h-full">
        <div style={{ height: 250 }} className="cursor-pointer">
          <Link
            href={`/blogs/${
              data ? (data.slug ? data.slug : data._id) : data._id
            }`}
          >
            <img className="h-full bg-cover" src={img} alt="" />
          </Link>
        </div>
        <div className="px-6 py-4 flex-1">
          <div className="font-bold text-xl mb-2">
            <Link
              href={`/blogs/${
                data ? (data.slug ? data.slug : data._id) : data._id
              }`}
            >
              {data.name}
            </Link>
          </div>
        </div>
        <div className="px-6 py-4 flex flex-row-reverse">
          <Link
            href={`/blogs/${
              data ? (data.slug ? data.slug : data._id) : data._id
            }`}
          >
            <span
              className="cursor-pointer inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer"
              onClick={handleClicked}
            >
              {actionName}
            </span>
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};
export default BlogCard;
