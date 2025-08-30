import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { products: [] };
};

const saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async ({ userId, guestId }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,
                {
                    params:
                        { userId, guestId },
                }
            );
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error?.response?.data);
        }
    }
)

// ✅ Add an item to the cart for a user or guest

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (
        { productId, quantity, size, guestId, userId,color }, // ✅ Put parameters in an object
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/cart`, // ✅ Proper template literal
                {
                    productId,
                    quantity,
                    size,
                    color,
                    guestId,
                    userId,
                }
            );
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error?.response?.data);
        }
    })

//update quantity of an item in the cart

export const updateCartItemQuantity = createAsyncThunk(
    "cart/upadateCartItemQuantity", async ({ productId, quantity, guestId, userId, size, color },
        { rejectWithValue }) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
            {
                productId,
                quantity,
                guestId,
                userId,
                size,
                color,
            }
        )
        return response.data;
    } catch (error) {
        console.error(error);
        return rejectWithValue(error?.response?.data)
    }
});


// 🔹 Remove an item from the cart
export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async (
        { productId, guestId, userId, size, color },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios({
                method: "DELETE",
                url: `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
                data: {
                    productId,
                    guestId,
                    userId,
                    size,
                    color,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to remove from cart"
            );
        }
    }
);

// 🔹 Merge guest cart into user cart
export const mergeCart = createAsyncThunk(
    "cart/mergeCart",
    async ({ guestId, user }, { rejectWithValue }) => {
        try {

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`, // ✅ Proper URL
                {
                    guestId,
                    user,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Correct template literal
                    },
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to merge cart"
            );
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: loadCartFromStorage(),
        loading: false,
        error: null,
    },
    reducers: {
        clearCart: (state) => {
            state.cart = { products: [] };
            localStorage.removeItem("cart");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload); // ✅ Persist cart to storage
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch cart";
            })

            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload); // ✅ Persist cart to storage
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add to cart";
            })

            .addCase(updateCartItemQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload); // ✅ Persist cart to storage
            })
            .addCase(updateCartItemQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || "Failed to upadateCartItemQuantity";
            })

            .addCase(removeFromCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload); // ✅ Persist cart to storage
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || "Failed to removeFromCart";
            })

            .addCase(mergeCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(mergeCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                saveCartToStorage(action.payload); // ✅ Persist cart to storage
            })
            .addCase(mergeCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || "Failed to mergeCart";
            });
    },

})

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;