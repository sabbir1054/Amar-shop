import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    
    totalQuantity = totalQuantity + product.quantity;

    if (!product.quantity) {
      product.quantity = 1;
    }
    total =
      (parseFloat(total) + parseFloat(product.price*product.quantity)).toFixed(2);
    
  }

 



  let tax = 0;
  if (cart.length <= 5) {
    tax = total * (5 / 100);
  } else if (cart.length <= 10) {
    tax=total*(7/100)
  } else {
    tax = total * (10 / 100);
  }
  let shipping = 0;
  if (cart.length===0) {
    shipping = 0;
  }
  else if (cart.length <= 5) {
    shipping = 20;
  } else if (cart.length <= 10) {
    shipping = 30;
  } else {
    shipping = 40;
  }
  let totalCost = parseFloat(total) + parseFloat(tax) + parseFloat(shipping);
  let history = useHistory();
  const handlePlace = () => {
    history.push('./order')
  }

    return (
      <div>
        <h3>Order Summery</h3>
        <br />
        <h5>
          Items ordered: <span className="cart-text">{totalQuantity}</span>{" "}
        </h5>
        <br />
        <h5>
          Total Product Price: <span className="cart-text">{total}</span>{" "}
        </h5>
        <h5>
          Tax: <span className="cart-text">{tax.toFixed(2)}</span>{" "}
        </h5>
        <h5>
          Shipping Cost:{" "}
          <span className="cart-text">{shipping.toFixed(2)}</span>
        </h5>
        <br />
        <h4 className="text-danger">Total cost:{totalCost.toFixed(2)}</h4>
        <button className="btn btn-primary text-white px-3 m2-2">
          <Link to="/order" className="text-decoration-none text-white">Order Review</Link>
        </button>
        <button className="btn btn-success text-white px-3 m-2 "
        onClick={handlePlace}>
          
          Place Order
        </button>
      </div>
    );
};

export default Cart;
