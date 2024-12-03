// Toast.js
import React, { useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        // Automatically close the toast after 5 seconds
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    let toastClass = "bg-gray-500"; // Default gray background for info
    if (type === 'success') {
        toastClass = "bg-green-500"; // Green for success
    } else if (type === 'error') {
        toastClass = "bg-red-500"; // Red for error
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
