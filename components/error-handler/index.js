// Toast.js
import React, { useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {

        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    let toastClass = "bg-gray-500"; 
    if (type === 'success') {
        toastClass = "bg-green-500"; 
    } else if (type === 'error') {
        toastClass = "bg-red-500"; 
    }

    return (
        <div
            className={`fixed bottom-4 right-4 z-50 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform ${toastClass}`}
            style={{ transform: message ? 'translateX(0)' : 'translateX(100%)' }}
        >
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button
                    onClick={onClose}
                    className="ml-2 text-xl"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Toast;
