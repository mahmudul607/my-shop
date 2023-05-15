import React from 'react';
import fakeData from '../../fakeData';
import ProductCard from '../ProductCard/ProductCard';
import './Product.css'

const Product = () => {
    const product = fakeData;
    return (
        <div className='product-area'>
            {product.map(pd => <ProductCard pd={pd}></ProductCard>)}
        </div>
    );
};

export default Product;