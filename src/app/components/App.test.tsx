import React from 'react';
import configureStore from 'redux-mock-store';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import App from './App';
import { createMockStore } from '../utils/test/mockStore';

describe('App', () => {
  let wrapper: ReactWrapper;
  const mockStore = createMockStore();

  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <App />
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(wrapper.get(0)).toBeTruthy();
  });
});
