
const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

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
            return data;
        } else {
            throw new Error(response.statusText || "Unknown error");

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getCurrentUser() {
    try {
        const response = await fetch(`${backend_url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("kullanıcı oturum açmamış");
        }

    } catch (error) {
        console.error("Error:", error);
        return { error: error.message };
    }
}


export async function upgradeCurrentUser(updatedData) {
    try {
        const response = await fetch(`${backend_url}/users/me`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(updatedData)
        });
        if (response.ok) {
            const data = await response.json();
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
            body: JSON.stringify(userData),
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: error.message };
    }
};
export const logoutUser = async () => {
    try {
        const response = await fetch(`${backend_url}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        // Yanıtı kontrol et
        if (response.ok) {
            return true;
        } else {
            // Yanıt içeriğini al
            const errorText = await response.text();
            console.log("Logout failed", errorText);
            return { error: errorText };  // Hata mesajını döndür
        }
    } catch (error) {
        return { error: error.message };
    }
}

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${backend_url}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            throw new Error(response.statusText || "Unknown error");
        }
    } catch (error) {
        return { error: error.message };
    }
}