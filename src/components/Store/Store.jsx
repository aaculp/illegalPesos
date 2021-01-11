import React, { useState, useEffect } from "react";
import StoreItems from "./StoreItems.jsx";
import Filter from "../Filters/Filter";

const Store = ({ products, onAddToCart }) => {
    const [storeItems, setStoreItems] = useState(products);
    const [productFilter, setProductFilter] = useState("");
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        setStoreItems(products)
        setProductCount(products.length)
    }, [products])

    const renderProducts = () => {
        return storeItems.map((product, i) => {
            return (
                <StoreItems key={i} product={product} onAddToCart={onAddToCart} />
            );
        })
    }

    const filterProducts = (event) => {
        setProductFilter(event.target.value)

        let filteredProduct = products.filter(product => product.name.includes(event.target.value));
        setStoreItems(filteredProduct);
        setProductCount(filteredProduct.length)

        if (event.target.value === "All") {
            setStoreItems(products)
            setProductCount(products.length)
        };
    }

    return (
        <main className="storeContent">
            <Filter products={products} productFilter={productFilter} filterProducts={filterProducts} productCount={productCount} />
            <div className="productContainer">
                {renderProducts()}
            </div>
        </main>
    );
};

export default Store;