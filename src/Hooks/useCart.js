import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakeDb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
      useEffect(() => {
        if (products.length) {
          const savedCart = getStoredCart();
          const storedCart = [];
          for (const key in savedCart) {
            const savedProduct = products.find(
              (product) => product.key === key
            );
            const quantity = savedCart[key];
            savedProduct.quantity = quantity;
            storedCart.push(savedProduct);
          }
          setCart(storedCart);
        }
      }, [products]);
    
    return [cart, setCart]
}

export default useCart;  