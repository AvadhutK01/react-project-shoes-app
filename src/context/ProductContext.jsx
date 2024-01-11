import React, { useState } from "react";

const productContext = React.createContext({
    products: [],
    increaseStocks: (productId, size, quantity) => { },
    decreaseStocks: (productId, size, quantity) => { },
    addProduct: () => { }
})

export const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState([]);

    const decreaseStocks = (productId, size, quantity) => {
        setProductList((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === productId && product.stocks[size] >= quantity) {
                    return {
                        ...product,
                        stocks: {
                            ...product.stocks,
                            [size]: product.stocks[size] - quantity
                        }
                    };
                }
                return product;
            });
        });
    };

    const increaseStocks = (productId, size, quantity) => {
        setProductList((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        stocks: {
                            ...product.stocks,
                            [size]: product.stocks[size] + quantity
                        }
                    };
                }
                return product;
            });
        });
    };

    const addProduct = (newProduct) => {
        setProductList((prevProducts) => [
            ...prevProducts,
            {
                id: Math.random() * new Date(),
                ...newProduct
            }
        ]);
    };

    return <productContext.Provider value={{ products: productList, increaseStocks: increaseStocks, decreaseStocks: decreaseStocks, addProduct: addProduct }}>
        {props.children}
    </productContext.Provider>
}

export default productContext;