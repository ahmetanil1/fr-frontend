import config from "@/config.json"
export async function getUsers() {
    try {
        const response = await fetch(config.backend_url + "/users", {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Users couldn't be fetched");
            return [];
        }
    } catch (error) {

        console.log("hata:", error);
        return [];
    }
}