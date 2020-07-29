import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import { IoMdTime } from "react-icons/io";
import { CardWrapper } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";
import useDate from "hooks/useDate";

const BlogCard = ({ data, actionName, colSpan = 3 }) => {
  const { _callBlogPageApis } = useBlogApi();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { dateFromNow } = useDate();
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
          <div className="font-bold text-xl">
            <Link
              href={`/blogs/${
                data ? (data.slug ? data.slug : data._id) : data._id
              }`}
            >
              {getValue(data, "name")}
            </Link>
          </div>
        </div>
        <div className="px-6 py-2 flex justify-between">
          <div className="flex text-sm items-center">
            <IoMdTime />
            <span className="text-gray-600 px-2 text-xs">
              {dateFromNow(getValue(data, "publishdate"))}
            </span>
          </div>
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
