import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import App from './app';
import { createMockStore } from '../../utils/test/mockStore';

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
