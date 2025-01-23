import React from 'react'
import clsx from 'clsx';


function Input({ size, variant, type, className, placeholder, min, value, onChange, ...props }) {

    const baseClasses = "rounded-md focus:outline-none "

    const sizeClasses = {
        xs: "w-16 h-8 px-2 text-sm",
        sm: "w-32 h-8 px-2 text-sm",
        md: "w-48 h-8 py-2 px-3 text-md",
        lg: "w-56 h-10 py-2 px-3 text-md",
        xl: "w-96 h-12 py-2 px-3 text-lg",
        wfull: "w-full h-10 py-2 px-3 text-lg"
    }

    const variantClasses = {
        default: "border border-gray-300 focus:border-gray-600 rounded-md flex dark:text-gray-900 dark:border-white",
    }

    const classes = clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)
    return (
        <div className='relative'>
            <input
                className={classes}
                type={type}
                placeholder={placeholder}
                min={min}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>)
}

export default Input 