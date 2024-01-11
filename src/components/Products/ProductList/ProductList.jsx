import React, { useContext } from 'react'
import ProductItems from '../ProductItems/ProductItems'
import './ProductList.css'
import productContext from '../../../context/ProductContext'
const ProductList = () => {
    let productCtx = useContext(productContext)
    return (
        <div className="product-list">
            {productCtx.products.map((product) => (
                <ProductItems key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList