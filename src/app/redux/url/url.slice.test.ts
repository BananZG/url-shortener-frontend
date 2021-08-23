import reducer, {
  loadingList,
  urlsReceived,
  addUrlStart,
  addUrlSuccess,
  addUrlFailure,
  clearAddUrlState,
  initialState,
  deleteUrlStart,
  deleteUrlSuccess,
  deleteUrlFailure,
} from './url.slice';

import { dummyUrl } from '../../utils/test/mockStore';

describe('urlSlice', () => {
  it('should return intial state', () => {
    expect(reducer(undefined, {} as any)).toEqual({
      loadingList: false,
      allUrl: [],
      addingUrl: false,
      tempUrlInfo: null,
      addUrlError: null,
      deletingUrl: false,
      deleteUrlError: null,
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

  it('should set deletingUrl to true', () => {
    expect(reducer(initialState, deleteUrlStart())).toEqual({
      ...initialState,
      deletingUrl: true,
      deleteUrlError: null,
    });
  });

  it('should update tempUrlInfo', () => {
    expect(reducer(initialState, deleteUrlSuccess())).toEqual({
      ...initialState,
      deletingUrl: false,
      deleteUrlError: null,
    });
  });

  it('should set error string when failed', () => {
    const error = 'random error';
    expect(reducer(initialState, deleteUrlFailure(error))).toEqual({
      ...initialState,
      deletingUrl: false,
      deleteUrlError: error,
    });
  });

  it('should reset clearAddUrlState', () => {
    expect(reducer(initialState, clearAddUrlState())).toEqual({
      ...initialState,
      addingUrl: false,
    });
  });
});
