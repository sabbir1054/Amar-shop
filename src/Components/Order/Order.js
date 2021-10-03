import React from "react";
import { Col, Row } from "react-bootstrap";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import { deleteFromDb } from "../../utilities/fakeDb";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  
  const handleRemove = (key)=>{
    const newCart = cart.filter(product => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  }
  return (
    <div>
      <Row>
        <Col md={6} lg={9}>
                  <h3 className="text-center">Your Items</h3>
          {
            cart.map(product => <ReviewProduct products={product} key={product.key} handleRemove={()=>handleRemove(product.key) }/>)
                  }
        </Col>
        <Col md={6} lg={3}>
          <Cart cart={cart}></Cart>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
