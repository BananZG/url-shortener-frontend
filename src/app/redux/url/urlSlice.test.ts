import reducer, {
  loadingList,
  urlsReceived,
  addUrlStart,
  addUrlSuccess,
  addUrlFailure,
  clearAddUrlState,
  initialState,
  fetchAllUrls,
  addUrl,
} from './urlSlice';

import { axiosInstance } from '../../utils/network/axios.util';

jest.mock('../../utils/network/axios.util');

describe('urlSlice', () => {
  const dummyUrl = {
    _id: '',
    longUrl: 'https://example.com',
    shortUrl: 'https://e.com/a',
    shortenId: 'a',
    created_date: new Date(),
    expiry_date: new Date(),
  };

  it('should return intial state', () => {
    expect(reducer(undefined, {} as any)).toEqual({
      loadingList: false,
      allUrl: [],
      addingUrl: false,
      tempUrlInfo: null,
      addUrlError: null,
    });
  });

  it('should set loading to true', () => {
    expect(reducer(initialState, loadingList())).toEqual({
      ...initialState,
      loadingList: true,
    });
  });

  it('should update urls', () => {
    expect(reducer(initialState, urlsReceived([dummyUrl]))).toEqual({
      ...initialState,
      loadingList: false,
      allUrl: [dummyUrl],
    });
  });

  it('should set addUrlStart to true', () => {
    expect(reducer(initialState, addUrlStart())).toEqual({
      ...initialState,
      addingUrl: true,
    });
  });

  it('should update tempUrlInfo', () => {
    expect(reducer(initialState, addUrlSuccess(dummyUrl))).toEqual({
      ...initialState,
      addingUrl: false,
      tempUrlInfo: dummyUrl,
    });
  });

  it('should set error string when failed', () => {
    const error = 'random error';
    expect(reducer(initialState, addUrlFailure(error))).toEqual({
      ...initialState,
      addingUrl: false,
      addUrlError: error,
    });
  });

  it('should reset clearAddUrlState', () => {
    expect(reducer(initialState, clearAddUrlState())).toEqual({
      ...initialState,
      addingUrl: false,
    });
  });

  it('should trigger update on urls', async () => {
    const dispatch = jest.fn();
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: [dummyUrl],
    });
    await fetchAllUrls()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it('should trigger update on create new url', async () => {
    const dispatch = jest.fn();
    (axiosInstance.post as jest.Mock).mockResolvedValueOnce({
      data: {
        newUrl: dummyUrl,
      },
    });
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: [dummyUrl],
    });
    await addUrl(dummyUrl.longUrl)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it('should trigger exception on create new url', async () => {
    const dispatch = jest.fn();
    const message = 'error';
    (axiosInstance.post as jest.Mock).mockRejectedValueOnce({
      response: {
        data: {
          message,
        },
      },
    });
    await addUrl(dummyUrl.longUrl)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it('should trigger exception on create new url 2', async () => {
    const dispatch = jest.fn();
    const message = 'error';
    (axiosInstance.post as jest.Mock).mockRejectedValueOnce({
      message,
    });
    await addUrl(dummyUrl.longUrl)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
