import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://673293d22a1b1a4ae1104e1b.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const postContact = createAsyncThunk(
  "contacts/postContact",
  async (newContact, thunkApi) => {
    try {
      await axios.post("/contacts", newContact);
      return newContact;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
