import React from 'react'
import clsx from "clsx";

const Textarea = ({ size, variant, className, value, onChange, placeholder, maxLength, ...props }) => {

    const baseClasses = "w-full px-2 py-2 rounded-md focus:outline-none"

    const sizeClasses = {
        sm: "text-xl h-12",
        md: "text-sm h-24",
        lg: "text-lg h-36"
    }

    const variantClasses = {
        default: "border border-black  focus:border-gray-600 border-gray-300 rounded-md flex  dark:text-gray-900 dark:border-white"
    }

    const classes = clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)

    return (
        <div className='relative'>
            <textarea
                className={classes}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
                {...props}
            />
            <span className="absolute right-2 bottom-2 text-sm text-gray-500">
                {maxLength - value.length}
            </span>
        </div>
    )

}

export default Textarea