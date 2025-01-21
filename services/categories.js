import config from "@/config.json";

export async function getCategories() {
    console.log(config.backend_url + "/categories");

    try {
        const response = await fetch(`${config.backend_url}/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Categories:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function createCategories() {
    try {
        const response = await fetch(`${config.backend_url}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            //TODO BODY GELEBİLİR
        });
        if (response.ok) {
            const data = await response.json();
            console.log("New Category:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }

}

export async function getSingleCategory() {
    try {
        const response = await fetch(`${config.backend_url}/categories/:id`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Single Category:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function updateCategory() {
    try {
        const response = await fetch(`${config.backend_url}/categories/:id`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            //TODO BODY GELEBİLİR
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Updated Category:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deleteCategory() {

    try {
        const response = await fetch(`${config.backend_url}/categories/:id`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Deleted Category:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getSubCategories() {
    try {
        const response = await fetch(`${config.backend_url}/categories/:id/subcategories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Sub Categories:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }

}


export async function getSlugCategories() {

    try {
        const response = await fetch(`${config.backend_url}/categories/:slug`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Categories with slug:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getSlugSubCategories() {
    try {
        const response = await fetch(`${config.backend_url}/categories/slug/:slug`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Sub Categories with slug:", data);
            return data;
        } else {
            throw new Error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}