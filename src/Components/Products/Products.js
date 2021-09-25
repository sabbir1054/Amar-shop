import React from "react";
import { Col, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Products = (props) => {
  const item=props.product;
  return (
    <div className="pt-3">
      <div className="container">
        <Row>
          <Col md={9}>
            <Product product={item}></Product>
          </Col>
          <Col md={3}>
            <Cart></Cart>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Products;
