import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'store/auth/authThunks';

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
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
