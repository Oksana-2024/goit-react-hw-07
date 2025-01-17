import { createSlice } from "@reduxjs/toolkit";
import contacts from "../contacts.json";

const initialState = {
  items: contacts,
  loading: false,
  error: null,
};
const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    fetchInProgress(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteContact,
  addContact,
  fetchInProgress,
  fetchSuccess,
  fetchError,
} = slice.actions;

export default slice.reducer;
