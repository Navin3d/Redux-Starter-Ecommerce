import { configureStore } from "@reduxjs/toolkit";

import productSlice, { productAction } from "../slices/product-slice";
import cartSlice, { cartAction } from "../slices/cart-slice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    }
});

const subscriber = () => {
    const updatedState = store.getState();

    console.log("Upcated Cart: " + JSON.stringify(updatedState.cart));
    console.log("Upcated Product: " + JSON.stringify(updatedState.products));
}

store.subscribe(subscriber);

store.dispatch(productAction.addProduct({
    id: "1",
    name: "Mac-Book Pro",
    price: 1800,
    description: "This is Mac-Book Pro"
}));

store.dispatch(productAction.addProduct({
    id: "2",
    name: "Mac-Book",
    price: 1700,
    description: "This is Mac-Book"
}));

store.dispatch(productAction.addProduct({
    id: "3",
    name: "Iphone Pro",
    price: 1800,
    description: "This is Iphone Pro"
}));

store.dispatch(productAction.addProduct({
    id: "4",
    name: "Iphone",
    price: 1700,
    description: "This is Iphone"
}));

store.dispatch(productAction.addProduct({
    id: "5",
    name: "Ipad Pro",
    price: 1800,
    description: "This is Ipad Pro"
}));

store.dispatch(cartAction.removeItem(""));

export default store;
