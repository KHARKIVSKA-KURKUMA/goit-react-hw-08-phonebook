import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filterSlice';

const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
