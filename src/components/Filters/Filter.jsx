import React, { useEffect } from 'react'

const Filter = ({ products, productBrand, productSize, productCount, filterBrand, filterSize }) => {
    return (
        <div className="product-filters" style={{ marginTop: '250px' }}>
            <div className="filter-sort">
                Brand:{" "}
                <select value={productBrand} onChange={filterBrand}>
                    <option value="All">All</option>
                    <option value="Gucci">Gucci</option>
                    <option value="VLone">VLone</option>
                    <option value="Supreme">Supreme</option>
                    <option value="Off White">Off White</option>
                    <option value="Palm Angels">Palm Angels</option>
                    <option value="Apple">Apple</option>
                </select>
            </div>
            <div className="filter-size">
            Filter:{" "}
                <select value={productSize} onChange={filterSize}>
                    <option value="ALL">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="3XL">3X</option>
                </select>
            </div>
            <div className="filter-results">{productCount} Products</div>
        </div >
    );
};

export default Filter;