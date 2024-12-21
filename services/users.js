import config from "@/config.json";

export async function fetchAllUser() {
    try {
        const response = await fetch(config.backend_url + "/user", {
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
        console.error("Error happened fetching users :", error);
        return [];
    }

}

export async function fetchSingleUser() {
    try {
        const response = await fetch(config.backend_url + "/user/me", {
            method: "GET",
            credentials: "include",
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            console.log("User couldn't be fetched");
            return null;
        }


    } catch (error) {
        console.error("Error happened fetching single user :", error)

    }
}