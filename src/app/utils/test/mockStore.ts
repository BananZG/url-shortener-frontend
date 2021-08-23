import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { URL } from '../../redux/url/url.models';
import { initialState } from '../../redux/url/url.slice';

export const dummyUrl: URL = {
  _id: '',
  longUrl: 'https://example.com',
  shortUrl: 'https://e.com/a',
  shortenId: 'a',
  created_date: new Date(),
  expiry_date: new Date(),
};

export const createMockStore = (initialUrlState = initialState) =>
  configureStore([thunk])({
    url: initialUrlState,
  });
