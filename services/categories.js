
const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;


export async function getCategories() {

    try {
        const response = await fetch(`${backend_url}/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function createCategories() {
    try {
        const response = await fetch(`${backend_url}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            //TODO BODY GELEBİLİR
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }
    } catch (error) {
        console.error("Error:", error);
    }

}

export async function getSingleCategory(cat_id) {
    try {
        const response = await fetch(`${backend_url}/categories/${cat_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function updateCategory(cat_id) {
    try {
        const response = await fetch(`${backend_url}/categories/${cat_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            //TODO BODY GELEBİLİR
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deleteCategory(cat_id) {

    try {
        const response = await fetch(`${backend_url}/categories/${cat_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getSubCategories(subCat_id) {
    try {
        const response = await fetch(`${backend_url}/categories/${subCat_id}/subcategories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }
    } catch (error) {
        console.error("Error:", error);
    }

}


export async function getSlugCategories(slug) {

    try {
        const response = await fetch(`${backend_url}/categories/${slug}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getSlugSubCategories(slug) {
    try {
        const response = await fetch(`${backend_url}/categories/slug/${slug}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }
    } catch (error) {
        console.error("Error:", error);
    }
}