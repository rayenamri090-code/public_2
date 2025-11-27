const STORAGE_KEY = 'admin_products';

const defaultProducts = [
    {
        id: "BC_01",
        name: "Fast Charging Cable",
        price: 25,
        image: "/images/cables/BC_01.png",
        type: "data-cables",
        compatibleDevices: ["Samsung", "iPhone"],
        rating: 4,
        isHot: false,
    },
    {
        id: "BC_02",
        name: "Braided USB Cable",
        price: 30,
        image: "/images/cables/BC_02.png",
        type: "data-cables",
        compatibleDevices: [],
        rating: 4,
        isHot: false,
    },
    {
        id: "BL_01",
        name: "Type-C Adapter",
        price: 20,
        image: "/images/adapters/BL_01.png",
        type: "adapters",
        compatibleDevices: [],
        rating: 5,
        isHot: true,
    },
];

export const getProducts = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
        return defaultProducts;
    }
    return JSON.parse(stored);
};

export const saveProduct = (product) => {
    const products = getProducts();
    const newProduct = {
        ...product,
        id: `PROD_${Date.now()}`,
    };
    const updatedProducts = [...products, newProduct];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
    return newProduct;
};

export const updateProduct = (updatedProduct) => {
    const products = getProducts();
    const newProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProducts));
    return updatedProduct;
};

export const deleteProduct = (id) => {
    const products = getProducts();
    const filteredProducts = products.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts));
    return filteredProducts;
};

export const initializeProducts = () => {
    getProducts();
}
