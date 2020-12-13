import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store, NavBar, Music, Cart, Checkout } from "./components";
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
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    };

    const handleUpdateCartNum = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    };

    const handleRemoveCartItem = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    };

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    };

    return (
        <Router>
            <div className="App">
                <NavBar products={products} totalItems={cart.total_items} />
                <Music />
                <Switch>
                    <Route exact path="/">
                        <Store
                            products={products}
                            onAddToCart={handleAddToCart}
                        />
                    </Route>
                    <Route exact path="/cart">
                        <Cart
                            cart={cart}
                            handleUpdateCartNum={handleUpdateCartNum}
                            handleRemoveCartItem={handleRemoveCartItem}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
