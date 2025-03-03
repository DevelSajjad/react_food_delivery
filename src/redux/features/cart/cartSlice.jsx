import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            state.push(action.payload);
        },

        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        IncrementItem: (state, action) => {
            return state.map((item) =>(
                item.id == action.payload ? {...item, qty: item.qty +1} : item
             ));
        },

        DecrementItem: (state, action) => {
            return state.map((item) => (
                item.id == action.payload && item.qty > 0 ? {...item, qty: item.qty - 1 } : {...item, qty: 0 }
            ))
        }
    }
});

export const {AddItem, RemoveItem, IncrementItem, DecrementItem} = cartSlice.actions;

export default cartSlice.reducer;