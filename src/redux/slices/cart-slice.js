import { createSlice } from "@reduxjs/toolkit";

const product = {
    id: "",
    name: "",
    price: 0,
    description: "",
    quantity: 0,
    totalProductPrice: 0
}

const initialCartState = {
    products: [
        product
    ],
    isCartVisible: false,
    totalCartItems: 1,
    cartTotalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {
            let isNewItem = state.products.filter(({ id }) => id === action.payload.id);

            if(isNewItem.length < 1) {
                state.products.push({...action.payload, quantity: 1, totalProductPrice: action.payload.price});
            } else {
                state.products.forEach(product => {
                    if(product.id === action.payload.id) {
                        product.quantity++;
                        product.totalProductPrice += action.payload.price
                    }
                });
            }

            state.totalCartItems++;
            state.cartTotalPrice += action.payload.price
        },

        removeItem(state, action) {
            state.products.forEach(product => {
                if(product.id === action.payload.id) {
                    product.quantity--;
                    product.totalProductPrice -= action.payload.price
                }
                if(product.quantity === 0) {
                    state.products.pop(product);
                }
            });

            state.totalCartItems--;
        },

        toggleVisiblity(state) {
            state.isCartVisible = !state.isCartVisible
        }
    }
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
