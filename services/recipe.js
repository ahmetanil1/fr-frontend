import config from "@/config.json";

export async function fetchAllRecipe() {
    try {
        const response = await fetch(config.backend_url + "/recipe", {
            method: "GET",
            credentials: "include",
        });

        if (response.ok) {
            const data = await response.json();
            return data; 

        }


    } catch (error) {
        console.error("Error fetching all recipes", error);
    }

}