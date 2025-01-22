import React from 'react'
import clsx from "clsx"

function Button({
    children,
    size,
    type,
    variant,
    onClick,
    className,
    ...props
}) {

    const baseClasses = "rounded-md";

    const sizeClasses = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg"
    }

    const variantClasses = {
        default: "bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-200",
        danger: "bg-red-700 text-white hover:bg-red-800 ",
    }

    const classes = clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)

    return (
        <div className='relative'>
            <button
                className={classes}
                type={type}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        </div>
    )
}

export default Button