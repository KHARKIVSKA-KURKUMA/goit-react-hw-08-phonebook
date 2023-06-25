import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64958045b08e17c917923130.mockapi.io';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postContactsThunk = createAsyncThunk(
  'contacts/postContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const putContactsThunk = createAsyncThunk(
  'contacts/editContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `/contacts/${newContact.id}`,
        newContact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
