import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            let itemExist = state.find((item)=> item.id == action.payload.id)
            if (itemExist) {
                return state.map((item) => item.id == action.payload.id ? {...item, qty: item.qty + 1} : item)
            } else {
                state.push(action.payload);
            }
        },

        RemoveItem: (state, action) => {
            toast("Remove this item")
            return state.filter((item) => item.id !== action.payload);
        },

        IncrementItem: (state, action) => {
            console.log(action.payload);
            return state.map((item) =>(
                item.id == action.payload ? {...item, qty: item.qty +1} : item
             ));
        },

        DecrementItem: (state, action) => {
            return state.map((item) => (
                item.id == action.payload && item.qty > 0 ? {...item, qty: item.qty - 1 } : item
            ))
        }
    }
});

export const {AddItem, RemoveItem, IncrementItem, DecrementItem} = cartSlice.actions;

export default cartSlice.reducer;