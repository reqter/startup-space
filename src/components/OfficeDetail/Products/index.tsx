import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "next/router";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import LayoutBox from "../LayoutBox";
import Product from "./Product";
import { ProductContainer } from "./styles";

const Products = () => {
  const router = useRouter();
  const [dataList, setData] = React.useState<object[]>();
  const { _getPartnerProducts } = useGlobalApi();
  const {
    partnerDetail,
    partnerDetailPage,
    partnerDetailProducts,
  } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  function handleChange(isVisible: boolean) {
    if (isVisible && !dataList)
      _getPartnerProducts(
        router.query.id as string,
        (result) => setData(result),
        () => {}
      );
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: -100 }}
    >
      <LayoutBox title={data.productsboxtitle}>
        <ProductContainer>
          {dataList &&
            dataList.map((item, index) => <Product key={index} data={item} />)}
        </ProductContainer>
      </LayoutBox>
    </VisibilitySensor>
  );
};
export default Products;
