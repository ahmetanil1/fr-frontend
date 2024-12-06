import React from "react";
import Link from "next/link";


function logo() {
    return (
        <Link href="/" className=" flex items-center justify-center rounded-md bg-transparent px-6 py-3 font-semibold dark:bg-transparent dark:text-white dark:border-white">Food <span>Recipe</span></Link>
    );
}

export default logo