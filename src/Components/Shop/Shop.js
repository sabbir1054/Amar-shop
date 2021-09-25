import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData/products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container">
        <Row>
          <Col md={9}>
            {products.map((product) => (
              <Products product={product} key={product.key} />
            ))}
          </Col>
          <Col md={3}>
            <Cart></Cart>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Shop;
