import { createAsyncThunk } from "@reduxjs/toolkit";
import {  fetchProducts } from "../api"

export const fetchDataAsyncAction = createAsyncThunk("products/fetchData", async () => {
    try {
        const data = await fetchProducts();
        return data;
    }
    catch (error) {
        return Promise.reject(error);
    }
});