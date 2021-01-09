import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import StoreItems from "./StoreItems.jsx";
import Filter from "../Filters/Filter";

const Store = ({ products, onAddToCart }) => {
    const [storeItems, setStoreItems] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productBrand, setProductBrand] = useState("");

    useEffect(() => {
        mapProducts();
    }, [products])

    const mapProducts = () => {
        const allProducts = products.map(product => {
            if (product.quantity > 0) {
                return (
                    <Grid key={product.id} item xs={10} sm={6} md={4} lg={4}>
                        <StoreItems product={product} onAddToCart={onAddToCart} />
                    </Grid>
                );
            }
        })
        setStoreItems(allProducts)
    }

    const filterBrand = (event) => {
        setProductBrand(event.target.value)
        const productBrand = products.map(product => {
            if (product.name.includes(event.target.value)) {
                return (
                    <Grid key={product.id} item xs={10} sm={6} md={4} lg={4}>
                        <StoreItems product={product} onAddToCart={onAddToCart} />
                    </Grid>
                );
            } else if (event.target.value == "All") {
                return (
                    <Grid key={product.id} item xs={10} sm={6} md={4} lg={4}>
                        <StoreItems product={product} onAddToCart={onAddToCart} />
                    </Grid>
                );
            }
        })
        setStoreItems(productBrand)
    }

    const filterSize = (event) => {
        setProductSize(event.target.value)
        const productSize = products.map(product => {
            product.variants.map(options => {
                console.log(options.options)
            })

        })
        setStoreItems(productSize)
    }

    // const filterSize = (event) => {
    //     setProductSize(event.target.value)
    //     const productSize = products.map(product => {
    //         product.variants.map(options => {
    //             options.map(size => {
    //                 if (size.name.includes(event.target.value)) {
    //                     return (
    //                         <Grid key={product.id} item xs={10} sm={6} md={4} lg={4}>
    //                             <StoreItems product={product} onAddToCart={onAddToCart} />
    //                         </Grid>
    //                     );
    //                 } else if (event.target.value == "All") {
    //                     return (
    //                         <Grid key={product.id} item xs={10} sm={6} md={4} lg={4}>
    //                             <StoreItems product={product} onAddToCart={onAddToCart} />
    //                         </Grid>
    //                     );
    //                 }
    //             })
    //         })

    //     })
    //     setStoreItems(productSize)
    // }

    return (
        <main className="storeContent">
            <Filter products={products} mapProducts={mapProducts} productSize={productSize} productBrand={productBrand} filterBrand={filterBrand} filterSize={filterSize} />
            <Grid container justify="center" spacing={1}>
                {storeItems}
            </Grid>
        </main>
    );
};

export default Store;

    // const mapProducts = products.map((product) => {
    //     if (product.quantity > 0) {
    //         return (
    //             <Grid key={product.id} item xs={10} sm={6} md={4} lg={4}>
    //                 <StoreItems product={product} onAddToCart={onAddToCart} />
    //             </Grid>
    //         );
    //     }
    // })
