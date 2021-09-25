import React from "react";
import { Col, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Products.css'

import ProductInfo from "../ProductInfo/ProductInfo";
const Products = (props) => {
  const item=props.product;
  return (
    <>
      
      <div className="pt-3 products">
        <Product product={item}></Product>
      </div>
    </>
  );
};

export default Products;
