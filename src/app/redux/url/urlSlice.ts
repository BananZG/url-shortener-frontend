import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/network/axios.util';

export type URL = {
  _id: string;
  longUrl: string;
  shortUrl: string;
  shortenId: string;
  created_date: Date;
  expiry_date: Date;
};

interface UrlState {
  allUrl: URL[];
  loadingList: boolean;
  addingUrl: boolean;
  tempUrlInfo: URL | null;
  addUrlError: string | null;
}

const initialState: UrlState = {
  loadingList: false,
  allUrl: [],
  addingUrl: false,
  tempUrlInfo: null,
  addUrlError: null,
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
  },
});

const { loadingList, urlsReceived, addUrlStart, addUrlSuccess, addUrlFailure } =
  urlSlice.actions;

export const fetchAllUrls = () => async (dispatch: Dispatch) => {
  dispatch(loadingList());
  const { data } = await axiosInstance.get<URL[]>(`url`);
  dispatch(urlsReceived(data));
};

export const addUrl = (longUrl: string) => async (dispatch: Dispatch) => {
  dispatch(addUrlStart());
  try {
    const { data } = await axiosInstance.post('url', {
      longUrl,
    });
    const { newUrl } = data;
    dispatch(addUrlSuccess(newUrl));
    fetchAllUrls()(dispatch);
  } catch (error) {
    dispatch(addUrlFailure(error));
  }
};

export default urlSlice.reducer;
