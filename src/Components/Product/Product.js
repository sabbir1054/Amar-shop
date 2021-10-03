import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  const {
    
    name,
    category,
    seller,
    star,
    starCount,
    price,
    stock,
    img,
  } = props.product;
  return (
    <>
      <Row className="bg-light py-2 d-flex product">
        <Col lg={3}>
          <img src={img} alt="" />
        </Col>
        <Col lg={9}>
          <div className="info ms-2 ">
            <h5>{name}</h5>
            <div className="d-flex">
              <p className="mx-auto">Category: {category}</p>
              <p className="mx-auto">Seller: {seller}</p>
            </div>
            <div className="d-flex">
              <p className="mx-auto">Ratings: {star}</p>
              <p className="mx-auto">Total reviews: {starCount}</p>
            </div>
            <div className="d-flex">
              <h5 className="mx-auto">Price: {price}</h5>
              <p className="mx-auto">Stocks: {stock}</p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className=" btn btn-warning"
                onClick={() => props.handleAddToCart(props.product)}
              >
                <i className="me-2 fas fa-shopping-cart"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Product;
