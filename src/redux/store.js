import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filtersSlice";
import { authReducer } from "./auth/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const contactsConfig = {
  key: "contactsKey",
  storage,
  whitelist: ["items"],
  // blacklist: ["showProfilesList"]
};

const authConfig = {
  key: "authKey",
  storage,
  whitelist: ["token", "user"],
  // blacklist: ["showProfilesList"]
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
