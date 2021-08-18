import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import { InputComponent } from './input.component';
import { createMockStore } from '../utils/test/mockStore';

describe('InputComponent', () => {
  let wrapper: ReactWrapper;
  const mockStore = createMockStore();

  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <InputComponent />
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(wrapper.get(0)).toBeTruthy();
    expect(wrapper.exists("button[data-testid='shorten-btn']")).toBeTruthy();
  });

  it('simulate textfield change', () => {
    const value = 'test value';
    const tf = wrapper.find("[data-testid='url-tf']").first();
		tf.simulate('change', { target: { value }});
  });

  it('click submit button', () => {
    const btn = wrapper.find("button[data-testid='shorten-btn']");
		btn.simulate('click');
  });
});
