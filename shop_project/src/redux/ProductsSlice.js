import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";

const ProductsSlice = createSlice({

    name: "products",
    initialState: {
        productsList: [],
        loading: false,
        error: null,
    },
    reducers: {
        setProducts: (state, action)=>{
            state.productsList= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.loading = false;
                state.productsList = action.payload;
            })
            .addCase(fetchDataAsyncAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;