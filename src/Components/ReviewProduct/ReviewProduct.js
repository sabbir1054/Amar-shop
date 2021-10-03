import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ReviewProduct = (props) => {
   const { name, quantity , star, starCount, price, stock, img } =
        props.products;
    const { handleRemove } = props;
    
    return (
      <div>
        <Row className="bg-light py-2 d-flex product">
          <Col lg={3}>
            <img src={img} alt="" />
          </Col>
          <Col lg={9}>
            <div className="info ms-2 ">
              <h5>{name}</h5>
              <div className="d-flex">
                <p className="mx-auto">Quantity: {quantity}</p>
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
                            <button className=" btn btn-warning" onClick={handleRemove}
                            >
                  <i className="fas fa-minus-square me-2"></i>
                  Remove Products
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default ReviewProduct;