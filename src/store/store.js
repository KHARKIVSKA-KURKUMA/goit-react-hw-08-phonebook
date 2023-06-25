import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filterSlice';
import { persistedAuthReducer } from './auth/authSlice';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
