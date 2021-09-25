import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const {
    key,
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
      <div className="bg-light py-2 d-flex product">
        <img src={img} alt="" />
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
            <button className=" btn btn-warning">
              <i className="me-2 fas fa-shopping-cart"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
