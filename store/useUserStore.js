import { create } from "zustand";

const useUserStore = create((set) => ({
    formData: {
        fullName: {
            name: "",
            surname: ""
        },
        userName: "",
        profileImage: "",
        gender: {
            male: {
                name: "male"
            },
            female: {
                name: "female"
            },
            specify: {
                name: ""
            }
        },
        phone: "",
        email: "",
        password: "",
        roles: [],
        perms: [],
        bio: "",
        isEmailVerified: false,
        links: {
            twitter: {
                name: "twitter",
                url: ""
            },
            facebook: {
                name: "facebook",
                url: ""
            },
            instagram: {
                name: "instagram",
                url: ""
            },
            youtube: {
                name: "youtube",
                url: ""
            },
        },
        followers: [],
        following: [],
        bookmarks: [],
        rates: [],
        dob: {
            day: {
                name: "day",
                max: 31,
                min: 1
            },
            month: {
                name: "month",
                max: 12,
                min: 1
            },
            year: {
                name: "year",
                max: 3000,
                min: 0
            }
        }
    },

    updateFormData: {
        updateFullName: (name, surname) => set((state) => ({ formData: { ...state.formData, fullName: { name, surname } } })),
        updateUserName: (userName) => set((state) => ({ formData: { ...state.formData, userName } })),
        updateProfileImage: (profileImage) => set((state) => ({ formData: { ...state.formData, profileImage } })),
        updateGender: (male, female, specify) => set((state) => ({ formData: { ...state.formData, gender: { male, female, specify } } })),
        updatePhone: (phone) => set((state) => ({ formData: { ...state.formData, phone } })),
        updateEmail: (email) => set((state) => ({ formData: { ...state.formData, email } })),
        updatePassword: (password) => set((state) => ({ formData: { ...state.formData, password } })),
        updateRoles: (roles) => set((state) => ({ formData: { ...state.formData, roles } })),
        updatePerms: (perms) => set((state) => ({ formData: { ...state.formData, perms } })),
        updateBio: (bio) => set((state) => ({ formData: { ...state.formData, bio } })),
        updateIsEmailVerified: (isEmailVerified) => set((state) => ({ formData: { ...state.formData, isEmailVerified } })),
        updateLinks: (twitter, facebook, instagram, youtube) => set((state) => ({ formData: { ...state.formData, links: { twitter, facebook, instagram, youtube } } })),
        updateFollowers: (followers) => set((state) => ({ formData: { ...state.formData, followers } })),
        updateFollowing: (following) => set((state) => ({ formData: { ...state.formData, following } })),
        updateBookmarks: (bookmarks) => set((state) => ({ formData: { ...state.formData, bookmarks } })),
        updateRates: (rates) => set((state) => ({ formData: { ...state.formData, rates } })),
        updateDob: (day, month, year) => set((state) => ({ formData: { ...state.formData, dob: { day, month, year } } }))
    }
}));

export default useUserStore;
