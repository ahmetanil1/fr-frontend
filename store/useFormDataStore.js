import { create } from 'zustand';

const useFormDataStore = create((set) => ({

    formData: {
        title: "",
        setTitle: (title) => set({ formData: { ...formData, title } }),
        description: "",
        setDescription: (description) => set({ formData: { ...formData, description } }),
        thumbnail: "",
        setThumbnail: (thumbnail) => set({ formData: { ...formData, thumbnail } }),
        nutrition: [
            {
                calories: "",
                fats: "",
                proteins: "",
                carbonhydrates: ""
            }
        ],
        setNutrition: (nutrition) => set({ formData: { ...formData, nutrition } }),
        portion: "",
        setPortion: (portion) => set({ formData: { ...formData, portion } }),
        preparing_time: "",
        setPreparingTime: (preparing_time) => set({ formData: { ...formData, preparing_time } }),
        cooking_time: "",
        setCookingTime: (cooking_time) => set({ formData: { ...formData, cooking_time } }),
        tools: [],
        setTools: (tools) => set({ formData: { ...formData, tools } }),
        ingredients: [
            {
                name: "",
                amount: "",
                unit: ""
            }
        ],
        setIngredients: (ingredients) => set({ formData: { ...formData, ingredients } }),
        cookingTips: [
            {
                id: "",
                title: "",
                description: "",
                image: ""
            }
        ],
        setCookingTips: (cooking_tips) => set({ formData: { ...formData, cooking_tips } }),
        videoUrl: "",
        setVideoUrl: (videoUrl) => set({ formData: { ...formData, videoUrl } }),
        gallery: [],
        setGallery: (gallery) => set({ formData: { ...formData, gallery } }),
    },
    updateField: () =>
        set((state) => ({
            formData: {
                ...state.formData,
                [field]: value
            },
        })),
    setField: (field, value) =>
        set((state) => ({
            formData: {
                ...state.formData,
                [field]: value,
            },
        })),
    addStep: () =>
        set((state) => ({
            formData: {
                ...state.formData,
                steps: [...state.formData.steps, { title: "", description: "", image: "" }],
            },
        })),

    removeStep: (index) =>
        set((state) => ({
            formData: {
                ...state.formData,
                steps: state.formData.steps.filter((_, i) => i !== index),
            },
        })),

    updateStep: (index, updatedStep) =>
        set((state) => {
            const updatedSteps = [...state.formData.steps];
            updatedSteps[index] = updatedStep;
            return {
                formData: {
                    ...state.formData,
                    steps: updatedSteps,
                },
            };
        }),
    addTools: () =>
        set((state) => ({
            formData: {
                ...state.formData,
                tools: [...state.formData.tools, ""],
            },
        })),
    removeTools: (index) =>
        set((state) => ({
            formData: {
                ...state.formData,
                tools: state.formData.tools.filter((_, i) => i !== index),
            },
        })),
    updateTools: (index, value) =>
        set((state) => {
            const updatedTools = [...state.formData.tools];
            updatedTools[index] = value;
            return {
                formData: {
                    ...state.formData,
                    tools: updatedTools,
                },
            };
        }),



    addIngredient: () =>
        set((state) => ({
            formData: {
                ...state.formData,
                ingredients: [...state.formData.ingredients, { name: "", amount: "", unit: "" }],
            },
        })),
    removeIngredient: (index) =>
        set((state) => ({
            formData: {
                ...state.formData,
                ingredients: state.formData.ingredients.filter((_, i) => i !== index),
            },
        })),
    updateIngredient: (index, field, value) =>
        set((state) => {
            const updatedIngredients = [...state.formData.ingredients];
            updatedIngredients[index][field] = value;
            return {
                formData: {
                    ...state.formData,
                    ingredients: updatedIngredients,
                },
            };
        }),

    addCookingTip: () =>
        set((state) => ({
            formData: {
                ...state.formData,
                cookingTips: [...state.formData.cookingTips, { title: "", description: "", image: "" }],
            },
        })),
    removeCookingTip: (index) =>
        set((state) => ({
            formData: {
                ...state.formData,
                cookingTips: state.formData.cookingTips.filter((_, i) => i !== index),
            },
        })),
    updateCookingTip: (index, field, value) =>
        set((state) => {
            const updatedCookingTips = [...state.formData.cookingTips];
            updatedCookingTips[index][field] = value;
            return {
                formData: {
                    ...state.formData,
                    cookingTips: updatedCookingTips,
                },
            };
        }),



    addGallery: () =>
        set((state) => ({
            formData: {
                ...state.formData,
                gallery: [...state.formData.gallery, ""]
            }
        })),
    removeGallery: (index) =>
        set((state) => ({
            formData: {
                ...state.formData,
                gallery: state.formData.gallery.filter((_, i) => i !== index),
            },
        })),
    updateGallery: (index, value) =>
        set((state) => {
            const updatedGallery = [...state.formData.gallery];
            updatedGallery[index] = value;
            return {
                formData: {
                    ...state.formData,
                    gallery: updatedGallery,
                },
            };
        }),
    resetForm: () =>
        set(() => ({
            formData: {
                title: "",
                description: "",
                thumbnail: "",
                nutrition: [
                    {
                        calories: "",
                        fats: "",
                        proteins: "",
                        carbonhydrates: ""
                    }
                ],
                portion: "",
                preparing_time: "",
                cooking_time: "",
                tools: [],
                ingredients: [
                    {
                        name: "",
                        amount: "",
                        unit: ""
                    }
                ],
                steps: [
                    {
                        title: "",
                        description: "",
                        image: ""
                    }
                ],
                videoUrl: "",
                gallery: [],
            },
        })),

    setFormData: (data) =>
        set(() => ({
            formData: data
        }))

}));


export default useFormDataStore;