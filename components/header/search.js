import React from "react";

const Search = () => {
    return (
        <div className="hidden md:flex flex-1">
            <input
                className="py-2 px-3 border border-gray-300 rounded-md outline-none flex  dark:text-gray-900 dark:border-white"
                type="text"
                placeholder="Search"
            />
        </div>
    );
};

export default Search;
