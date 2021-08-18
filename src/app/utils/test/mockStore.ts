import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState } from '../../redux/url/urlSlice';

export const createMockStore = (initialUrlState = initialState) =>
  configureStore([thunk])({
    url: initialUrlState,
  });
