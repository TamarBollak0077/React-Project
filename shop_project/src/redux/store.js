import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import productsReducer from './ProductsSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});

export default store;