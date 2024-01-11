import React, { useState, useContext } from 'react'
import productContext from '../../../context/ProductContext';
import CartContext from '../../../context/CartContext';

const ProductItems = ({ product }) => {

    const productCtx = useContext(productContext);

    const cartCtx = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);

    const [selectedSize, setSelectedSize] = useState('');

    const sizes = ['Small', 'Medium', 'Large'];

    const incrementQuantity = () => {
        if (quantity < product.stocks[selectedSize]) {
            setQuantity((prev) => prev + 1);
        }
    }
    const decrementQuantity = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleCartSubmit = (product) => {
        if (selectedSize !== '' && quantity > 0) {
            productCtx.decreaseStocks(product.id, selectedSize, quantity);
            let item = { ...product, size: selectedSize, quantity: quantity };
            cartCtx.addToCartHandler(item);
        }
        setQuantity(0);
        setSelectedSize('');
    }


    return (
        <div className="product-item">
            <div className="product-header">
                <h3>{product.name}</h3>
                <p className="price">र{product.price}</p>
            </div>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="description">{product.description}</p>
            <div className='flex items-center justify-center mb-4'>
                <div className="flex items-center justify-center mb-4">
                    <div className="custom-number-input h-10 w-32 mx-1">
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                                data-action="decrement"
                                onClick={decrementQuantity}
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            >
                                <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input
                                type="number"
                                className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                                name="custom-input-number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <button
                                data-action="increment"
                                onClick={incrementQuantity}
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                            >
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </div>
                    <select
                        className="ml-2 p-2 border border-gray-300 rounded"
                        value={selectedSize}
                        onChange={handleSizeChange}
                    >
                        <option value="">Select Size</option>
                        {sizes
                            .filter((size) => product.stocks[size] > 0)
                            .map((size) => (
                                <option key={size} value={size}>
                                    {size}{` (${product.stocks[size]})`}
                                </option>
                            ))}
                    </select>

                </div>
                <button type="button" className="add-to-cart" onClick={() => handleCartSubmit(product)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductItems