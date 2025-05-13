

export const fetchProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const response = await fetch('https://dummyjson.com/products/category/kitchen-accessories');
            const result = await response.json();
            resolve(result.products);

        }, 1000);
    });
};

