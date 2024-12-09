import { React, useEffect, useState } from 'react'
import config from "@/config.json"
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function FeaturedRecipe() {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipe = await fetch(`${config.backend_url}/recipes`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include'
                });

                const data = await recipe.json();
                console.log(data)
                if (data.success) {
                    setRecipes(data.recipes);
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong");
            }
        }

        fetchRecipes();
    }, [])
    return (
        <div>
            <div className='flex flex-wrap justify-center gap-4 my-10'>
                <div>
                    apspda
                </div>
            </div>
        </div>
    )
}

export default FeaturedRecipe