const STORAGE_KEY = 'admin_sliders';

const defaultSliders = [
    {
        id: 1,
        image:
            "https://sora.chatgpt.com/g/gen_01k9t6j24xe46tergm4hw1jkxw",
        title: "Charge Your Phone Safely!",
        description:
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
        button1: "TO SHOP",
        button2: "READ MORE",
    },
    {
        id: 2,
        image:
            "https://sora.chatgpt.com/g/gen_01k9t6anr1f9kv52fj9gp2kxxp",
        title: "Premium Charging Solutions",
        description:
            "Experience the latest in charging technology with our safe and efficient power solutions for all your devices.",
        button1: "SHOP NOW",
        button2: "LEARN MORE",
    },
    {
        id: 3,
        image:
            "https://videos.openai.com/az/vg-assets/task_01k9t6j10mfq4tma7cavyq9ekk%2F1762889735_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A08%3A59Z&ske=2025-11-18T01%3A13%3A59Z&sks=b&skv=2024-08-04&sig=xmu2q5MmUVGcNpnhDjdQ2yBOVe3wV68IP8mXJw3s1bo%3D&ac=oaivgprodscus2",
        title: "Fast Wireless Charging",
        description:
            "Cut the cords and embrace the future of wireless power with our advanced charging stations.",
        button1: "BUY NOW",
        button2: "VIEW PRODUCTS",
    },
];

export const getSliders = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSliders));
        return defaultSliders;
    }
    return JSON.parse(stored);
};

export const saveSlider = (slider) => {
    const sliders = getSliders();
    const newSlider = { ...slider, id: Date.now() };
    const updatedSliders = [...sliders, newSlider];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSliders));
    return newSlider;
};

export const updateSlider = (updatedSlider) => {
    const sliders = getSliders();
    const index = sliders.findIndex((s) => s.id === updatedSlider.id);
    // Wait, I should fix the typo in the code I'm about to write.
    const newSliders = sliders.map(s => s.id === updatedSlider.id ? updatedSlider : s);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSliders));
    return updatedSlider;
};

export const deleteSlider = (id) => {
    const sliders = getSliders();
    const filteredSliders = sliders.filter((s) => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredSliders));
    return filteredSliders;
};

export const initializeSliders = () => {
    getSliders(); // This will trigger the default set if empty
}
