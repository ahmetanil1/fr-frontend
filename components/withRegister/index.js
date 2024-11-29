import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function withRegister() {
    return (
        <div className="flex gap-4 mb-5">
            <button
                type="button"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
            >
                <FaGoogle />Continue With Google
            </button>

            <button
                type="button"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
            >
                <FaFacebook />Continue With Facebook
            </button>
        </div>
    )
}

export default withRegister