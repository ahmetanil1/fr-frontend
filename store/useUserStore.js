import { create } from "zustand";

const useUserStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    login: (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        set({ user: userData });
    },
    logout: () => {
        localStorage.removeItem("user");
        set({ user: null });
    },
}));


export default useUserStore;