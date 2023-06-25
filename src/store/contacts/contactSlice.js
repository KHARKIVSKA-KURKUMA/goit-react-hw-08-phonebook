import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  deleteContactsThunk,
  getContactsThunk,
  postContactsThunk,
  putContactsThunk,
} from './contactsThunks';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handleFunctions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(postContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = [payload, ...state.contacts];
      })
      .addCase(putContactsThunk.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1, payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          postContactsThunk.pending,
          deleteContactsThunk.pending,
          putContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          postContactsThunk.rejected,
          deleteContactsThunk.rejected,
          putContactsThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          postContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled,
          putContactsThunk.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactReducer = contactSlice.reducer;
