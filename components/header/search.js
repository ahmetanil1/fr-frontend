import React from "react";

const Search = () => {
    return (
        <div className="hidden md:flex flex-1">
            <input
                className="py-2 px-3 border border-gray-300 rounded-md outline-none flex dark:bg-black dark:text-white dark:border-white"
                type="text"
                placeholder="Search"
            />
        </div>
    );
};

export default Search;
