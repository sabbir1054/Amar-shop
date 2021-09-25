import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';

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
        {products.map((product) => (
          <Products product={product} key={product.key} />
        ))}
      </div>
    );
};

export default Shop;