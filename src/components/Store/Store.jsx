import React, { useState, useEffect } from "react";
import StoreItems from "./StoreItems.jsx";
import Filter from "../Filters/Filter";

const Store = ({ products, onAddToCart }) => {
    const [storeItems, setStoreItems] = useState(products);
    const [productSize, setProductSize] = useState("");
    const [productBrand, setProductBrand] = useState("");
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

    const filterBrand = (event) => {
        setProductBrand(event.target.value)

        let filteredProduct = products.filter(product => product.name.includes(event.target.value));
        setStoreItems(filteredProduct);
        setProductCount(filteredProduct.length)

        if (event.target.value === "All") {
            setStoreItems(products)
            setProductCount(products.length)
        };
    }

    const filterSize = (event) => {
        setProductSize(event.target.value)

        let filteredSize = products.filter(product => product.name.includes(event.target.value));
        setStoreItems(filteredSize);
        setProductCount(filteredSize.length)


        if (event.target.value === "All") {
            setStoreItems(products)
            setProductCount(products.length)
        };
    }

    return (
        <main className="storeContent">
            <Filter products={products} productSize={productSize} productBrand={productBrand} productCount={productCount} filterBrand={filterBrand} filterSize={filterSize} />
            <div className="productContainer">
                {renderProducts()}
            </div>
        </main>
    );
};

export default Store;