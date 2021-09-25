import React from "react";

const Product = (props) => {
  console.log(props.product);
  const {
    name,
    category,
    seller,
    star,
    starCount,
    price,
    stock,
    img,
    features,
  } = props.product;
  return (
    <div className="bg-light pt-2 d-flex">
      <img src={img} alt="" />
      <div className="info ms-2">
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
      </div>
    </div>
  );
};

export default Product;
