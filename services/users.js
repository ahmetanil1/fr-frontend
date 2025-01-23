import dotenv from "dotenv";
import { toast } from 'react-toastify';

const backend_url = process.env.BACKEND_URL;

export async function GetSingleUser(user_id) {
    try {
        const response = await fetch(`${backend_url}/users/${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("User:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getSingleUserFollowers(user_id) {
    try {
        const response = await fetch(`${backend_url}/users/${user_id}/followers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            console.log("User Followers:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getSingleUserFollowing(user_id) {
    try {
        const response = await fetch(`${backend_url}/users/${user_id}/followings`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            console.log("User Following:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function followUser(user_id) {
    try {
        const response = await fetch(`${backend_url}/users/${user_id}/follow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            console.log("User Following:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function unfollowUser(user_id) {
    try {
        const response = await fetch(`${backend_url}/users/${user_id}/unfollow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            console.log("User unfollowing:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getCurrentUser(token) {
    try {
        const response = await fetch(`${backend_url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Current User:", data);
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function upgradeCurrentUser(token) {
    try {
        const response = await fetch(`${backend_url}/users/me`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Upgraded user data:", data);
            return data;
        }
        else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        console.log("Error:", error)
    }

}

export const loginUser = async (userData) => {
    try {
        const response = await fetch(`${backend_url}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error("Login failed");
        }

        const token = response.headers.get("Authorization");
        //! HEADERDAN TOKEN ALMA  

        if (token) {
            console.log("Token retrivied", token)
            return token;
        } else {
            throw new Error("Token not found in headers");
        }

    } catch (error) {
        console.error(error);
        toast.error(error.message.tr);
    }
}