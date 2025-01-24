import { create } from "zustand";

const useBlogFromDataStore = create((set) => ({

    blogFormData: {
        title: "",
        setTitle: (title) => set({ blogFromData: { ...blogFromData, title } }),

        description: "",
        setDescription: (description) => set({ blogFromData: { ...blogFromData, description } }),

        thumbnail: "",
        setThumbnail: (thumbnail) => set({ blogFromData: { ...blogFromData, thumbnail } }),

        content: [
            {
                id: "",
                description: "",
            }
        ],
        setContent: (content) => set({ blogFromData: { ...blogFromData, content } }),

        gallery: [
            {
                id: "",
                imageUrl: ""
            }
        ],
        setGallery: (gallery) => set({ blogFromData: { ...blogFromData, gallery } }),

        video: [
            {
                id: "",
                videoUrl: ""
            }
        ],
        setVideo: (video) => set({ blogFromData: { ...blogFromData, video } }),
    },

    setBlogFormData: (data) =>
        set(() => ({
            blogFromData: data
        })),

    updateField: () =>
        set((state) => ({
            blogFromData: {
                ...state.blogFromData,
                [field]: value
            }
        })),

    setField: (field, value) =>
        set((state) => ({
            blogFromData: {
                ...state.blogFromData,
                [field]: value
            }
        })),


    addContent: (content) => set((state) => ({
        blogFromData: {
            ...state.blogFromData,
            content: [...state.blogFromData.content, content]
        }
    })),
    removeContent: (content) => set((state) => ({
        blogFromData: {
            ...state.blogFromData,
            content: state.blogFromData.content.filter((item) => item.id !== content.id)
        }
    })),
    updateContent: (index, value) => set((state) => {
        const updatedContent = [...state.blogFromData.content];
        updatedContent[index] = value;
        return {
            blogFromData: {
                ...state.blogFromData,
                content: updatedContent
            }
        }
    }),

    addGallery: (gallery) => set((state) => ({
        blogFromData: {
            ...state.blogFromData,
            gallery: [...state.blogFromData.gallery, gallery]
        }
    })),
    removeGallery: (gallery) => set((state) => ({
        blogFromData: {
            ...state.blogFromData,
            gallery: state.blogFromData.gallery.filter((item) => item.id !== gallery.id)
        }
    })),
    updateGallery: (index, value) => set((state) => {
        const updatedGallery = [...state.blogFromData.gallery];
        updatedGallery[index] = value;
        return {
            blogFromData: {
                ...state.blogFromData,
                gallery: updatedGallery
            }
        }
    }),

    addVideo: (video) => set((state) => ({
        blogFromData: {
            ...state.blogFromData,
            video: [...state.blogFromData.video, video]
        }
    })),
    removeVideo: (video) => set((state) => ({
        blogFromData: {
            ...state.blogFromData,
            video: state.blogFromData.video.filter((item) => item.id !== video.id)
        }
    })),
    updateVideo: (index, value) => set((state) => {
        const updatedVideo = [...state.blogFromData.video];
        updatedVideo[index] = value;
        return {
            blogFromData: {
                ...state.blogFromData,
                video: updatedVideo
            }
        }
    }),


    resetBlogFromData: () => set({
        blogFromData: {
            title: "",
            description: "",
            thumbnail: "",
            content: [
                {
                    id: "",
                    description: "",
                }
            ],
            gallery: [
                {
                    id: "",
                    imageUrl: ""
                }
            ],
            video: [
                {
                    id: "",
                    videoUrl: ""
                }
            ]
        }
    }),

}));


export default useBlogFromDataStore;