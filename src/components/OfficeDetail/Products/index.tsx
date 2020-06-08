import React from "react";
import LayoutBox from "../LayoutBox";
import Product from "./Product";
import { ProductContainer } from "./styles";

const Products = () => {
  return (
    <LayoutBox title="محصولات و قیمت">
      <ProductContainer>
        {[1, 1, 1, 1, 1].map((item, index) => (
          <Product />
        ))}
      </ProductContainer>
    </LayoutBox>
  );
};
export default Products;
