import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "../redux/slices/productSlice"
import cartReducer from "../redux/slices/cartSlice"
import checkoutSlice from "../redux/slices/checkoutSlice"
import orderSlice from "../redux/slices/orderSlice"
import adminSlice from "../redux/slices/adminSlice"
import adminProductSlice from "../redux/slices/adminProductSlice"
import adminOrdersSlice from "../redux/slices/adminOrderSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        checkout: checkoutSlice,
        orders:orderSlice,
        admin:adminSlice,
        adminProducts:adminProductSlice,
        adminOrders:adminOrdersSlice,
    },
});

export default store;