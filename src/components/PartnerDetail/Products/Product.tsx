import React from "react";
import { ProductWrapper, Button } from "./styles";
import Image from "components/Common/Image";
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

  const perHourPrice = thousandSeperator(getValue(data, "perhourprice"));
  const dailyPrice = thousandSeperator(getValue(data, "dailyprice"));
  const weeklyPrice = thousandSeperator(getValue(data, "weeklyprice"));
  const monthlyPrice = thousandSeperator(getValue(data, "monthlyprice"));
  const media = getValue(data, "media");
  return (
    <ProductWrapper>
      <div className="rounded overflow-hidden shadow">
        <Image className="w-full h-40" src={media && media[0]} alt="" />
        <div className="flex flex-col pt-3 px-3">
          <div className="font-bold text-lg mb-2">{getValue(data, "name")}</div>
          {perHourPrice && perHourPrice.toString() !== "0" && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productperhourtitle")}
              </span>
              <span className="text-sm">{perHourPrice}</span>
            </p>
          )}
          {dailyPrice && dailyPrice.toString() !== "0" && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productdailytitle")}
              </span>
              <span className="text-sm">{dailyPrice}</span>
            </p>
          )}
          {weeklyPrice && weeklyPrice.toString() !== "0" && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productweeklytitle")}
              </span>
              <span className="text-sm">{weeklyPrice}</span>
            </p>
          )}
          {monthlyPrice && monthlyPrice.toString() !== "0" && (
            <p className="text-gray-700 text-base border-b border-solid border-gray-300 flex justify-between mb-2">
              <span className="font-semibold text-sm">
                {getValue(pageData, "productmonthlytitle")}
              </span>
              <span className="text-sm">{monthlyPrice}</span>
            </p>
          )}

          <p className="text-sm text-gray-600 my-5">
            {getValue(data, "description")}
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
