import { create } from "zustand"

const useUserStore = create((set) => ({
    userData: {
        fullName: [
            {
                name: "",
                surname: "",
            }
        ],
        setFullName: (fullName) => set(state => ({ userData: { ...state.userData, fullName } })),
        username: "",
        setUsername: (username) => set(state => ({ userData: { ...state.userData, username } })),
        dob: [
            {
                day: "",
                month: "",
                year: "",
            }
        ],
        setDob: (dob) => set(state => ({ userData: { ...state.userData, dob } })),
        profileImage: "",
        setProfileImage: (profileImage) => set(state => ({ userData: { ...state.userData, profileImage } })),
        gender: [
            {
                male: false,
                female: false,
                specify: false
            }
        ],
        setGender: (gender) => set(state => ({ userData: { ...state.userData, gender } })),
        phone: "",
        setPhone: (phone) => set(state => ({ userData: { ...state.userData, phone } })),
        email: "",
        setEmail: (email) => set(state => ({ userData: { ...state.userData, email } })),
        password: "",
        setPassword: (password) => set(state => ({ userData: { ...state.userData, password } })),
        roles: [],
        setRoles: (roles) => set(state => ({ userData: { ...state.userData, roles } })),
        perms: [],
        setPerms: (perms) => set(state => ({ userData: { ...state.userData, perms } })),
        isEmailVerified: false,
        setIsEmailVerified: (isEmailVerified) => set(state => ({ userData: { ...state.userData, isEmailVerified } })),
        bio: "",
        setBio: (bio) => set(state => ({ userData: { ...state.userData, bio } })),
        links: [
            {
                name: "",
                link: "",
            }
        ],
        setLinks: (links) => set(state => ({ userData: { ...state.userData, links } })),
        followers: [],
        setFollowers: (followers) => set(state => ({ userData: { ...state.userData, followers } })),
        followings: [],
        setFollowings: (followings) => set(state => ({ userData: { ...state.userData, followings } })),
        bookmarks: [],
        setBookmarks: (bookmarks) => set(state => ({ userData: { ...state.userData, bookmarks } })),
        rates: [
            {
                recipe_id: "",
                rate: "",
            }
        ],
        setRates: (rates) => set(state => ({ userData: { ...state.userData, rates } })),
    }
}))

updateFullName: (fullname) => {
    const [name, surname] = fullName.split(' ');
    set((state) => ({
        userData: {
            ...state.userData,
            fullName: { name, surname }
        }
    }))
}

updateUsername: (username) =>
    set((state) => ({
        userData: {
            ...state.userData,
            username
        }
    }))


updateDob: (dob) => {
    const [day, month, year] = dob.split('/');
    set((state) => ({
        userData: {
            ...state.userData,
            dob: { day, month, year }
        }
    }))
}

updateProfileImage: (profileImage) =>
    set((state) => ({
        userData: {
            ...state.userData,
            profileImage
        }
    }))

updateGender: (genderType) =>
    set((state) => ({
        userData: {
            ...state.userData,
            gender: {
                male: genderType === 'male',
                female: genderType === 'female',
                specify: genderType === 'specify'
            }
        }
    }));

updatePhone: (phone) =>
    set((state) => ({
        userData: {
            ...state.userData,
            phone
        }
    }))


updateEmail: (email) =>
    set((state) => ({
        userData: {
            ...state.userData,
            email
        }
    }))


updatePassword: (password) =>
    set((state) => ({
        userData: {
            ...state.userData,
            password
        }
    }))


updateRoles: (roles) =>
    set((state) => ({
        userData: {
            ...state.userData,
            roles
        }
    }))


updatePerms: (perms) =>
    set((state) => ({
        userData: {
            ...state.userData,
            perms
        }
    }))


updateIsEmailVerified: (isEmailVerified) =>
    set((state) => ({
        userData: {
            ...state.userData,
            isEmailVerified
        }
    }))


updateBio: (bio) =>
    set((state) => ({
        userData: {
            ...state.userData,
            bio
        }
    }))


updateLinks: (links) => {
    const { name, link } = links;
    set((state) => ({
        userData: {
            ...state.userData,
            links: { name, link }
        }
    }))

}
updateFollowers: (followers) =>
    set((state) => ({
        userData: {
            ...state.userData,
            followers
        }
    }))


updateFollowings: (followings) =>
    set((state) => ({
        userData: {
            ...state.userData,
            followings
        }
    }))



updateBookmarks: (bookmarks) =>
    set((state) => ({
        userData: {
            ...state.userData,
            bookmarks
        }
    }))


updateRates: (rates) =>
    set((state) => ({
        userData: {
            ...state.userData,
            rates
        }
    }))

export default useUserStore