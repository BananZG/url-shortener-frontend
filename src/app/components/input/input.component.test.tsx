import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Alert } from '@material-ui/lab';

import { InputComponent } from './input.component';
import { createMockStore, dummyUrl } from '../../utils/test/mockStore';

describe('InputComponent', () => {
  const mockStore = createMockStore();

  const render = (store = mockStore) =>
    mount(
      <Provider store={store}>
        <InputComponent />
      </Provider>,
    );

  it('should render correctly', () => {
    const wrapper = render();
    expect(wrapper.get(0)).toBeTruthy();
    expect(wrapper.exists("button[data-testid='shorten-btn']")).toBeTruthy();
  });

  it('simulate textfield change', () => {
    const wrapper = render();
    const value = 'test value';
    const tf = wrapper.find("[data-testid='url-tf']").first();
    const onChange = tf.invoke('onChange');
    if (onChange) {
      onChange({ target: { value } } as any);
    }
  });

  it('click submit button', () => {
    const wrapper = render();
    const btn = wrapper.find("button[data-testid='shorten-btn']");
    const onClick = btn.invoke('onClick');
    if (onClick) {
      onClick({} as any);
    }
  });

  it('when url created successfully, show success alert', () => {
    const wrapper = render(
      createMockStore({
        loadingList: false,
        allUrl: [],
        addingUrl: false,
        tempUrlInfo: dummyUrl,
        addUrlError: null,
        deletingUrl: false,
        deleteUrlError: null,
      }),
    );
    expect(
      wrapper.exists("[data-testid='new-url-success-alert']"),
    ).toBeTruthy();
    const alert = wrapper.find(Alert);
    const onClose = alert.invoke('onClose');
    if (onClose) {
      onClose({} as any);
    }
  });

  it('when url creation failed, show error alert', () => {
    const wrapper = render(
      createMockStore({
        loadingList: false,
        allUrl: [],
        addingUrl: false,
        tempUrlInfo: null,
        addUrlError: 'Error',
        deletingUrl: false,
        deleteUrlError: null,
      }),
    );

    expect(wrapper.exists("[data-testid='new-url-error-alert']")).toBeTruthy();

    const alert = wrapper.find(Alert);
    const onClose = alert.invoke('onClose');
    if (onClose) {
      onClose({} as any);
    }
  });

  it('should show loading progress when adding new Url', () => {
    const wrapper = render(
      createMockStore({
        loadingList: false,
        allUrl: [],
        addingUrl: true,
        tempUrlInfo: null,
        addUrlError: null,
        deletingUrl: false,
        deleteUrlError: null,
      }),
    );
    expect(
      wrapper.exists("[data-testid='circular-progress-btn']"),
    ).toBeTruthy();
  });
});
