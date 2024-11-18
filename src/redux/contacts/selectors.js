import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/filtersSlice";

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
