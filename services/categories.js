import config from "@/config.json"

// export const getCategories = () => {
//     return [
//         { id: "burger", name: "Burger", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "kebap", name: "Kebap", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "lahmacun", name: "Lahmacun", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "pilav", name: "Pilav", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "pizza", name: "Pizza", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "salata", name: "Salata", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "tatli", name: "Tatlı", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "makarna", name: "Makarna", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "sushi", name: "Sushi", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "corba", name: "Çorba", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "sandvic", name: "Sandviç", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "dondurma", name: "Dondurma", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "kahve", name: "Kahve", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "deniz_urunleri", name: "Deniz Ürünleri", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "et_yemekleri", name: "Et Yemekleri", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "tavuk", name: "Tavuk", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "vegan", name: "Vegan", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "sebze_yemekleri", name: "Sebze Yemekleri", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "kahvalti", name: "Kahvaltı", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "fast_food", name: "Fast Food", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "tacos", name: "Tacos", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "borek", name: "Börek", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "mezeler", name: "Mezeler", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "meyveler", name: "Meyveler", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "sokak_yemekleri", name: "Sokak Yemekleri", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "smoothie", name: "Smoothie", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "doner", name: "Döner", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "kofte", name: "Köfte", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "sutlu_tatlilar", name: "Sütlü Tatlılar", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//         { id: "baklava", name: "Baklava", image_url: "https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg" },
//     ];
// };

export async function getCategories() {
    try {
        const response = await fetch(config.backend_url + "/categorie", {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Categories couldn't be fetched");
            return [];
        }
    } catch (error) {
        console.error("Error happened fetching categories:", error);
        return [];
    }
}

