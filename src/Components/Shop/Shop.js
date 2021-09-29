import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { addToDb } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData/products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
//add to local storage
    addToDb(item.key);
    
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(matchedProducts);
  };
  
  return (
    <div>
      <Header></Header>
      <div className="search py-3 d-flex justify-content-center align-items-center">
        <input
          type="text"
          onChange={handleSearch}
          className="w-75 mx-2"
          placeholder="Type Here To Search"
        />
        <i className="fas fa-shopping-cart cart"></i>
        <h4 className="text-warning ms-2">{cart.length}</h4>
      </div>
      <div className="container">
        <Row>
          <Col md={9}>
            {filteredProducts.map((product) => (
              <Product
                product={product}
                key={product.key}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </Col>
          <Col md={3} className="d-none d-md-block">
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Shop;
