import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Products from "../Products/Products";
import './Shop.css'
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
      <div className="search py-3 d-flex justify-content-center align-items-center">
        <input type="text" className="w-75 mx-2" placeholder="Type Here To Search"/>
        <i className="fas fa-shopping-cart cart"></i>
        <h4 className='text-warning ms-2'>0</h4>
      </div>
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
