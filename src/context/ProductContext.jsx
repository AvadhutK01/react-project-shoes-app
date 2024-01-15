import React, { useState, useEffect } from "react";

const productContext = React.createContext({
    products: [],
    increaseStocks: (productId, size, quantity) => { },
    decreaseStocks: (productId, size, quantity) => { },
    addProduct: () => { }
})


export const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState(JSON.parse(localStorage.getItem("Shoesproducts")) || [
        {
            id: 1,
            name: "Sneakers",
            description: "Comfortable everyday sneakers",
            price: 2500,
            image: "https://img.freepik.com/premium-photo/flying-trendy-sneakers-creative-colorful-background-stylish-fashionable-minimalism-concept-levita_77190-8701.jpg",
            stocks: {
                Small: 10,
                Medium: 15,
                Large: 20
            }
        },
        {
            id: 2,
            name: "Running Shoes",
            description: "High-performance running shoes",
            price: 2000,
            image: "https://contents.mediadecathlon.com/p2155510/2d4c941c14f1be10172d8977107329a6/p2155510.jpg?format=auto&quality=70&f=650x0",
            stocks: {
                Small: 8,
                Medium: 12,
                Large: 18
            }
        },
        {
            id: 3,
            name: "Sandals",
            description: "Casual and comfortable sandals",
            price: 1000,
            image: "https://www.shutterstock.com/image-photo/brown-color-shoes-sandle-260nw-640081699.jpg   ",
            stocks: {
                Small: 5,
                Medium: 10,
                Large: 15
            }
        },
        {
            id: 4,
            name: "Formal Shoes",
            description: "Elegant formal shoes",
            price: 700,
            image: "https://baccabucci.com/cdn/shop/products/01-_1_-min_c735f819-8e62-4df6-8fdb-6e04e11243ae.jpg?v=1663314198",
            stocks: {
                Small: 12,
                Medium: 18,
                Large: 25
            }
        }
    ]
    );

    useEffect(() => {
        localStorage.setItem("Shoesproducts", JSON.stringify(productList));
    }, [productList]);

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