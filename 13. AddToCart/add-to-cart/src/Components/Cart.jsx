import React from 'react';

const Cart = ({ cartItems, setCartItems, setShowCart }) => {

    const updateQuantity = (id, type) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: type === "increment" ? item.quantity + 1 : Math.max(0, item.quantity - 1),
                        }
                        : item
                )
                .filter(item => item.quantity > 0)  // Remove item if quantity is 0
        );
    };

    const total = cartItems.reduce((acc, item) => {
        const price = parseInt(item.price.replace('₹', '').replace(',', ''));
        return acc + (price * item.quantity);
    }, 0);

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6">Your Cart</h1>
                <div className="divide-y divide-gray-200">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty!</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex items-center py-4">
                                <img src={item.image1} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="bg-gray-300 px-2 py-1 rounded-l hover:bg-gray-400"
                                        onClick={() => updateQuantity(item.id, "decrement")}
                                    >
                                        -
                                    </button>
                                    <span className="px-3 py-1 border-t border-b text-gray-700">{item.quantity}</span>
                                    <button
                                        className="bg-gray-300 px-2 py-1 rounded-r hover:bg-gray-400"
                                        onClick={() => updateQuantity(item.id, "increment")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Cart Total: ₹{total}</h2>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Checkout
                    </button>
                </div>
                <button
                    onClick={() => setShowCart(false)}
                    className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Return to Home Screen
                </button>
            </div>
        </div>
    );
};

export default Cart;
