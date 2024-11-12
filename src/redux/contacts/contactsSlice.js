import { createSelector, createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, postContact } from "../contactsOps";
import { selectNameFilter } from "../filter/filtersSlice";

const INITIAL_STATE = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  error: null,
  loading: false,
};
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postContact.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(postContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((e) => e.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const isContactsLoading = (state) => state.contacts.loading;
export const isContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const data = Array.isArray(contacts)
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
    return data;
  }
);
