import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { URL, UrlState } from './url.models';

export const initialState: UrlState = {
  loadingList: false,
  allUrl: [],
  addingUrl: false,
  tempUrlInfo: null,
  addUrlError: null,
  deletingUrl: false,
  deleteUrlError: null,
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    loadingList: (state) => {
      return {
        ...state,
        loadingList: true,
      };
    },
    urlsReceived: (state, { payload }: PayloadAction<URL[]>) => {
      return {
        ...state,
        loadingList: false,
        allUrl: payload,
      };
    },
    addUrlStart: (state) => {
      return {
        ...state,
        addingUrl: true,
        tempUrlInfo: null,
        addUrlError: null,
      };
    },
    addUrlSuccess: (state, action: PayloadAction<URL>) => {
      return {
        ...state,
        addingUrl: false,
        addUrlError: null,
        tempUrlInfo: action.payload,
      };
    },
    addUrlFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        addingUrl: false,
        tempUrlInfo: null,
        addUrlError: action.payload,
      };
    },
    deleteUrlStart: (state) => {
      return {
        ...state,
        deletingUrl: true,
        deleteUrlError: null,
      };
    },
    deleteUrlSuccess: (state) => {
      return {
        ...state,
        deletingUrl: false,
        deleteUrlError: null,
      };
    },
    deleteUrlFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        deletingUrl: false,
        deleteUrlError: action.payload,
      };
    },
    clearAddUrlState: (state) => {
      return {
        ...state,
        addingUrl: false,
        tempUrlInfo: null,
        addUrlError: null,
      };
    },
  },
});

export const {
  loadingList,
  urlsReceived,
  addUrlStart,
  addUrlSuccess,
  addUrlFailure,
  clearAddUrlState,
  deleteUrlStart,
  deleteUrlSuccess,
  deleteUrlFailure,
} = urlSlice.actions;

export default urlSlice.reducer;
