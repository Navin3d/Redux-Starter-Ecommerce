import { createSlice } from "@reduxjs/toolkit";

const productInitialState = [
    {
        id: "",
        name: "",
        price: 0,
        description: ""
    }
]

const productSlice = createSlice({
    name: "product",
    initialState: productInitialState,
    reducers: {
        addProduct(state, action) {
            state.push(action.payload);
        },
        removeProduct(state, action) {
            state.filter(({ id }) => id !== action.payload.id)
        }
    }
});

export const productAction = productSlice.actions;

export default productSlice.reducer;
