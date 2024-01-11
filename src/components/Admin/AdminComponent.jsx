import React, { useState, useContext } from "react";
import productContext from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AdminComponent = () => {
    const { addProduct } = useContext(productContext);

    const navigate = useNavigate();

    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: 0,
        image: "",
        stocks: {
            Small: 0,
            Medium: 0,
            Large: 0
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleStocksChange = (size, value) => {
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            stocks: {
                ...prevProduct.stocks,
                [size]: value
            }
        }));
    };

    const handleAddProduct = () => {
        addProduct(newProduct);
        setNewProduct({
            name: "",
            description: "",
            price: 0,
            image: "",
            stocks: {
                Small: 0,
                Medium: 0,
                Large: 0
            }
        });
    };

    const handleGoHome = () => {
        navigate('/');
    }

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form className="max-w-md mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stocks-small">
                        Stocks - Small
                    </label>
                    <input
                        type="number"
                        id="stocks-small"
                        name="stocksSmall"
                        value={newProduct.stocks.Small}
                        onChange={(e) => handleStocksChange("Small", e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stocks-medium">
                        Stocks - Medium
                    </label>
                    <input
                        type="number"
                        id="stocks-medium"
                        name="stocksMedium"
                        value={newProduct.stocks.Medium}
                        onChange={(e) => handleStocksChange("Medium", e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stocks-large">
                        Stocks - Large
                    </label>
                    <input
                        type="number"
                        id="stocks-large"
                        name="stocksLarge"
                        value={newProduct.stocks.Large}
                        onChange={(e) => handleStocksChange("Large", e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="button"
                    onClick={handleAddProduct}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Product
                </button>
                <button
                    type="button"
                    onClick={handleGoHome}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Home
                </button>
            </form>
        </div>
    );
};

export default AdminComponent;
