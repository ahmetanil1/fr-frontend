import React from "react";
import Link from "next/link";


function logo() {
    return (
        <Link href="/" className=" flex items-center justify-center rounded-md bg-gray-100 px-6 py-3 font-semibold dark:bg-gray-400 dark:text-white dark:border-white">Food <span>Recipe</span></Link>
    );
}

export default logo