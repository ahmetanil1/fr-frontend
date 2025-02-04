import React from "react";
import MostPopuler from "../../components/HomeComponents/MostPopular";
import MostRating from "../../components/HomeComponents/MostRating";
import Recommended from "../../components/HomeComponents/Recommended";
import AllRecipes from "../../components/HomeComponents/AllRecipes";

const HomeContainer = () => {

    return (
        <div className="flex flex-col space-y-10 px-4 py-10">
            <span className="flex justify-center items-center text-2xl ">Most Popular</span>

            <div><MostPopuler /></div>
            <hr className="border border-gray-400"></hr>
            <span className="flex justify-center items-center text-2xl ">Most Rating</span>
            <div><MostRating /></div>
            <hr className="border border-gray-400"></hr>
            <span className="flex justify-center items-center text-2xl ">Recommended</span>

            <div><Recommended /></div>
            <hr className="border border-gray-400"></hr>
            <span className="flex justify-center items-center text-2xl ">All Recipes</span>

            <div><AllRecipes /></div>
        </div>
    )
}

export default HomeContainer