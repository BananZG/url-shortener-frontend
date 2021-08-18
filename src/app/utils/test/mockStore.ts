import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const createMockStore = () =>
  configureStore([thunk])({
    url: {
      loadingList: false,
      allUrl: [],
      addingUrl: false,
      tempUrlInfo: null,
      addUrlError: null,
    },
  });
