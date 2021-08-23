import { Dispatch } from '@reduxjs/toolkit';

import type { URL } from './url.models';
import { axiosInstance } from '../../utils/network/axios.util';
import {
  loadingList,
  urlsReceived,
  addUrlStart,
  addUrlSuccess,
  addUrlFailure,
  clearAddUrlState,
  deleteUrlStart,
  deleteUrlSuccess,
  deleteUrlFailure,
} from './url.slice';

export { clearAddUrlState };

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
    if (error.response) {
      dispatch(addUrlFailure(error.response.data.message));
    } else {
      dispatch(addUrlFailure(error.message));
    }
  }
};

export const deleteUrl = (id: string) => async (dispatch: Dispatch) => {
  dispatch(deleteUrlStart());
  try {
    await axiosInstance.delete('url/', {
      params: {
        id,
      },
    });
    dispatch(deleteUrlSuccess());
    fetchAllUrls()(dispatch);
  } catch (error) {
    if (error.response) {
      dispatch(deleteUrlFailure(error.response.data.message));
    } else {
      dispatch(deleteUrlFailure(error.message));
    }
  }
};
