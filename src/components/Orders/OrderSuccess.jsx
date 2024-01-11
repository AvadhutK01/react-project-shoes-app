import React from 'react';

const OrderSuccess = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
                <p className="text-gray-600">Thank you for your purchase. Your order has been successfully processed.</p>
            </div>
        </div>
    );
};

export default OrderSuccess;
