import React from "react";
import { ProductWrapper, Button } from "./styles";

const Product = () => {
  return (
    <ProductWrapper>
      <div className="rounded overflow-hidden shadow">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-B8egKV5nxf2GnXQdN4bH6-js111aMAYXt_Pb9fyrjcXUm_d3&usqp=CAU"
          alt="Sunset in the mountains"
        />
        <div className="flex flex-col pt-3 px-3">
          <div className="font-bold text-lg mb-2">صندلی اشتراکی</div>
          <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
            <span className="font-semibold">ساعتی</span>
            <span className="text-sm">100,000</span>
          </p>
          <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
            <span className="font-semibold">روزانه</span>
            <span className="text-sm">100,000</span>
          </p>

          <p className="text-sm text-gray-600 my-5">
            انتخاب مورد ماهیانه برای شما تخفیف ده درصدی دارد
          </p>
        </div>
        <Button>انتخاب</Button>
      </div>
    </ProductWrapper>
  );
};
export default Product;
// <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
//   <span className="font-semibold">هفتگی</span>
//   <span className="text-sm">100,000</span>
// </p>
// <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
//   <span className="font-semibold">ماهانه</span>
//   <span className="text-sm">100,000</span>
// </p>
