import { useState, useEffect } from "react";

export default function BasketModal({ isOpen, onClose }) {
    const [cartItems, setCartItems] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cartData);
    }, []);

    const increment = (id) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };

    const decrement = (id) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, amount: Math.max(item.amount - 1, 0) } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
    };

    const placeOrder = () => {
        if (cartItems.length === 0) {
            alert('Корзина пуста. Пожалуйста, добавьте товары в корзину.');
            return;
        }
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
            onClose();
            clearCart();
        }, 3000);

        

    };
    if (!isOpen) return null;
    const totalAmount = cartItems.reduce((total, item) => total + (item.amount * item.price), 0);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-500px h-auto p-6 rounded-md shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl text-orange-100 font-semibold">Корзина</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Close modal">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="text-gray-800">
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center  mb-2">
                                <div>
                                <span className="text-2xl">{item.name} -</span>
                                <span className="text-xl font-bold"> ${item.price}</span>

                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => decrement(item.id)} className="px-2 border-orange-100 border-2 rounded-xl p-2 bg-orange-100 text-white w-9">-</button>
                                    <span className="px-2 font-medium text-xl items-center">{item.amount}</span>
                                    <button onClick={() => increment(item.id)} className="px-2 border-orange-100 border-2 rounded-xl p-2 bg-orange-100 text-white w-9">+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <p className="font-semibold">Общая сумма: ${totalAmount.toFixed(2)}</p>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                    <button onClick={clearCart} className="px-4 py-2 bg-gray-200 text-black text-xl border-black border-2 rounded-md hover:bg-gray-300 focus:outline-none">Очистить корзину</button>
                    <button onClick={placeOrder} className="px-4 py-2 bg-blue-500 border-orange-100 text-xl border-2 text-orange-100  rounded-md hover:bg-blue-600 focus:outline-none">Оформить заказ</button>
                </div>
            </div>
            {showConfirmation && (
                <div className="fixed top-0 w-400px justify-center block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark p-5">
                    <div className="flex flex-col justify-center">
                    <p className="text-2xl text-orange-100 font-bold">Заказ успешно оформлен!</p>
                    <p className="text-xl font-bold">Общая сумма: ${totalAmount.toFixed(2)}</p>
                    <p className="text-xl">Товары: {cartItems.map(item => item.name).join(', ')}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
