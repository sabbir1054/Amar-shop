import React from "react";

const Cart = (props) => {
  console.log(props.cart);
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total = (parseFloat(total) +parseFloat(product.price)).toFixed(2);
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
  if (cart.length==0) {
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
    return (
      <div>
        <h3>Order Summery</h3><br />
        <h5>Items ordered: {props.cart.length}</h5><br />
        <h5>Total Product Price:{total}</h5>
        <h5>Tax:{tax.toFixed(2)}</h5>
        <h5>Shipping Cost:{shipping.toFixed(2)}</h5><br />
        <h4 className='text-danger'>Total cost:{totalCost.toFixed(2)}</h4>
        <button className="btn btn-primary text-white px-3 me-3">Order Review</button>
        <button className="btn btn-success text-white px-3 me-3">Order Now</button>
      </div>
    );
};

export default Cart;
