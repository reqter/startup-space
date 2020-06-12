import React from "react";
import { ProductWrapper, Button } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

interface IProps {}
const Product = ({ data }) => {
  const { partnerDetailPage } = useGlobalState();
  const pageData = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  const { getValue, thousandSeperator } = useObjectPropsValue();

  const perHourPrice = thousandSeperator(getValue(data, "fields.perhourprice"));
  const dailyPrice = thousandSeperator(getValue(data, "fields.dailyprice"));
  const weeklyPrice = thousandSeperator(getValue(data, "fields.weeklyprice"));
  const monthlyPrice = thousandSeperator(getValue(data, "fields.monthlyprice"));
  return (
    <ProductWrapper>
      <div className="rounded overflow-hidden shadow">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-B8egKV5nxf2GnXQdN4bH6-js111aMAYXt_Pb9fyrjcXUm_d3&usqp=CAU"
          alt="Sunset in the mountains"
        />
        <div className="flex flex-col pt-3 px-3">
          <div className="font-bold text-lg mb-2">
            {getValue(data, "fields.name")}
          </div>
          {perHourPrice && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productperhourtitle")}
              </span>
              <span className="text-sm">{perHourPrice}</span>
            </p>
          )}
          {dailyPrice && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productdailytitle")}
              </span>
              <span className="text-sm">{dailyPrice}</span>
            </p>
          )}
          {weeklyPrice && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productweeklytitle")}
              </span>
              <span className="text-sm">{weeklyPrice}</span>
            </p>
          )}
          {monthlyPrice && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productmonthlytitle")}
              </span>
              <span className="text-sm">{monthlyPrice}</span>
            </p>
          )}

          <p className="text-sm text-gray-600 my-5">
            {getValue(data, "fields.shortDesc")}
          </p>
        </div>
        <Button>{getValue(pageData, "productactiontext")}</Button>
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
