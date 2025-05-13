import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name: "cart",
    initialState: {
        cartList: [],
        totalSum: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cartList.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartList.push({ ...action.payload, quantity: 1 });
            }
            state.totalSum += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const existingProduct = state.cartList.find(item => item.id === action.payload.id);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                    state.totalSum -= existingProduct.price; 
                } else {
                    state.totalSum -= existingProduct.price; 
                    state.cartList = state.cartList.filter(item => item.id !== action.payload.id);
                }
            }
        },
        deleteFromCart: (state, action) => {
            const productToDelete = state.cartList.find(p => p.id === action.payload.id);
            if (productToDelete) {
                state.totalSum -= productToDelete.price * productToDelete.quantity;
                state.cartList = state.cartList.filter(item => item.id !== action.payload.id);
            }

        },
        setTotalSum: (state, action)=>{
            state.totalSum= action.payload;
        },
        clearCart:(state, action)=>{
            state.cartList= [];
        },
    },
}
)

export const { addToCart, removeFromCart, deleteFromCart, setTotalSum, clearCart } = CartSlice.actions;
export default CartSlice.reducer;