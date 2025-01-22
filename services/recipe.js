
const backend_url = process.env.BACKEND_URL;

export const fetchAllRecipes = async () => {
    try {
        const response = await fetch(`${backend_url}/recipes`, {
            method: "GET",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const fetchRecipeById = async (recipe_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}`, {
            method: "GET",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const createNewRecipe = async (recipeData) => {
    try {
        const response = await fetch(`${backend_url}/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(recipeData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const updateRecipeById = async (recipe_id, recipeData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(recipeData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const deleteRecipeById = async (recipe_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}`, {
            method: "DELETE",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const fetchRecipeByUserAndSlug = async (user_id, recipe_slug) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${user_id}/${recipe_slug}`, {
            method: "GET",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const addComponentToRecipe = async (recipe_id, componentData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/components`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(componentData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const updateRecipeComponent = async (recipe_id, component_id, componentData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/components/${component_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(componentData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const deleteRecipeComponent = async (recipe_id, component_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/components/${component_id}`, {
            method: "DELETE",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const addInformationToRecipe = async (recipe_id, informationData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/informations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(informationData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const updateRecipeInformation = async (recipe_id, information_id, informationData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/informations/${information_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(informationData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const deleteRecipeInformation = async (recipe_id, information_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/informations/${information_id}`, {
            method: "DELETE",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const addInstructionsToRecipe = async (recipe_id, instructionsData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/instructions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(instructionsData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const updateRecipeInstructions = async (recipe_id, instructionsData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/instructions`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(instructionsData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const deleteRecipeInstructions = async (recipe_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/instructions`, {
            method: "DELETE",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const addCommentToRecipe = async (recipe_id, commentData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(commentData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const updateRecipeComment = async (recipe_id, comment_id, commentData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/comments/${comment_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(commentData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const deleteRecipeComment = async (recipe_id, comment_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/comments/${comment_id}`, {
            method: "DELETE",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const addReplyToComment = async (recipe_id, comment_id, replyData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/comments/${comment_id}/replies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(replyData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const updateCommentReply = async (recipe_id, comment_id, reply_id, replyData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/comments/${comment_id}/replies/${reply_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(replyData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const deleteCommentReply = async (recipe_id, comment_id, reply_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/comments/${comment_id}/replies/${reply_id}`, {
            method: "DELETE",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const rateRecipe = async (recipe_id, ratingData) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/rate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(ratingData)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const fetchUserRecipeRating = async (recipe_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/my-rating`, {
            method: "GET",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const fetchUserRecipeBookmark = async (recipe_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/my-bookmark`, {
            method: "GET",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const addRecipeBookmark = async (recipe_id) => {
    try {
        const response = await fetch(`${backend_url}/recipes/${recipe_id}/bookmark`, {
            method: "POST",
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Data:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.error("Error: ", error.message);
    }
};