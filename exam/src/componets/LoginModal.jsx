import { useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogin = () => {
        if (loginData.username.trim() && loginData.password.trim()) {
            localStorage.setItem("loggedInUser", loginData.username);
            onClose();
            window.location.reload();
        } else {
            alert("Заполните все поля");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg text-orange-100 font-semibold">Login</h2>
                    <button onClick={onClose} className="text-orange-100 hover:text-gray-700 focus:outline-none" aria-label="Close modal">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-orange-100">Username</label>
                        <input type="text" id="username" name="username" value={loginData.username} onChange={handleChange} className="mt-1 p-2 w-full border border-orange-100  rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-orange-100">Password</label>
                        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} className="mt-1 p-2 w-full border border-orange-100 rounded-md" />
                    </div>
                    <div className="flex justify-center">
                        <button type="button" onClick={handleLogin} className="px-4 py-2 border-orange-100 border-2 bg-blue-500 text-orange-100 rounded-md hover:bg-blue-600 focus:outline-none">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
