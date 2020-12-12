import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store, NavBar, Music, Cart } from "./components";
import { commerce } from "./components/lib/commerce.js";
import "./css/App.css";

function App() {
  // const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
    console.log(cart);
  };

  return (
    <Router>
      <div className="App">
        <NavBar products={products} totalItems={cart.total_items} />
        <Music />
        <Route exact path="/">
          <Store products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} products={products} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
