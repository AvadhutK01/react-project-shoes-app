import React, { useEffect, useState, useContext } from 'react'
import CartContext from '../../context/CartContext';
import productContext from '../../context/ProductContext';

const CartComponent = () => {

    const [totalAmount, setTotalAmount] = useState(0);

    const cartCtx = useContext(CartContext);
    const cartProducts = cartCtx.cart;

    const productCtx = useContext(productContext);

    useEffect(() => {
        setTotalAmount(cartProducts.reduce((total, product) => total + product.amount, 0));
    }, [cartProducts])

    const incrementQuantity = (Id, size) => {
        const cartProduct = cartProducts.find(product => product.Id === Id && product.size === size);
        const product = productCtx.products.find(product => product.id === Id);
        console.log(product.stocks[size]);
        if (cartProduct) {
            if (product.stocks[size] > 0) {
                cartCtx.updateQuantityHandler(Id, size, '+');
                productCtx.decreaseStocks(Id, size, 1);
            }
        }
    };

    const decrementQuantity = (Id, size) => {
        cartCtx.updateQuantityHandler(Id, size, '-');
        productCtx.increaseStocks(Id, size, 1);
    }

    return (
        <>
            <ul>
                {cartProducts.map((product) => (
                    <li key={product.Id}>
                        <div className='ms-5'>{product.quantity}x {product.name} - {product.size}</div>
                        <div className="custom-number-input h-10 w-32 mx-1">
                            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" onClick={() => decrementQuantity(product.Id, product.size)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <button data-action="increment" onClick={() => incrementQuantity(product.Id, product.size)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className='mx-5'>र{product.amount}</div>
                    </li>
                ))}
            </ul>
            <div className="total">Total: र{totalAmount}</div>
        </>
    )
}

export default CartComponent