import config from "@/config.json";

async function fetchData(endpoint, options = {}) {
    try {
        const res = await fetch(`${config.backend_url}${endpoint}`, {
            method: options.method || "GET",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: JSON.stringify(options.body) || null,
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

export async function fetchCategories() {
    return await fetchData("/categories");
}
