import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import LayoutBox from "../../LayoutBox";
import Product from "./Product";
import { ProductContainer } from "./styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Products = () => {
  const [dataList, setData] = React.useState<object[]>();
  const { getValue } = useObjectPropsValue();
  const { _getPartnerProducts } = useGlobalApi();
  const { partnerDetailPage, partnerDetailId } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  React.useEffect(() => {
    if (!dataList) {
      _getPartnerProducts(
        partnerDetailId,
        (result) => setData(result),
        () => {}
      );
    }
  });
  return dataList && dataList.length ? (
    <LayoutBox title={getValue(data, "productsboxtitle")}>
      <ProductContainer>
        {dataList &&
          dataList.map((item, index) => <Product key={index} data={item} />)}
      </ProductContainer>
    </LayoutBox>
  ) : null;
};
export default Products;
