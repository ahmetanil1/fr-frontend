import React from "react";
import Input from "../general/Input";
const Search = () => {
    return (
        <div className="hidden md:flex flex-1">
            <Input
                size="lg"
                variant="default"
                type="search"
                placeholder="Search"
            />
        </div>
    );
};

export default Search;
