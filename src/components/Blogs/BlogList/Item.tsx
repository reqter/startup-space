import React from "react";
import { CardWrapper } from "./styles";
const BlogCard = ({ data }) => {
  return (
    <CardWrapper>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">نوشته شماره 4</div>
          <p className="text-gray-700 text-base">اثرات قرنطینه در کسب درآمد</p>
        </div>
        <div className="px-6 py-4 flex flex-row-reverse">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            بیشتر بخوانید
          </span>
        </div>
      </div>
    </CardWrapper>
  );
};
export default BlogCard;
