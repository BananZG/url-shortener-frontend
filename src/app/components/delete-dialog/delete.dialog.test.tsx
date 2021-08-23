import type { ReactWrapper } from 'enzyme';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore, dummyUrl } from '../../utils/test/mockStore';

import type { DeleteDialogProps } from './delete.dialog';
import { DeleteDialog } from './delete.dialog';
import { useAppDispatch } from '../../redux/hook';

jest.mock('../../redux/hook');
const mockDispatch = jest.fn();
(useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);

describe('DeleteDialog', () => {
  let wrapper: ReactWrapper;
  const store = createMockStore();
  const defaultProps: DeleteDialogProps = {
    url: dummyUrl,
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <DeleteDialog {...defaultProps} />
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(wrapper.get(0)).toBeTruthy();
    expect(wrapper.exists("[data-testid='delete-dialog-btn']")).toBeTruthy();
    expect(wrapper.exists("[data-testid='delete-dialog-ok-btn']")).toBeFalsy();

    // simulate open delete dialog
    const openBtn = wrapper.find("[data-testid='delete-dialog-btn']").first();
    const openBtnOnClick = openBtn.invoke('onClick');
    if (openBtnOnClick) {
      openBtnOnClick({} as any);
    }
    // delete dialog appears
    expect(wrapper.exists("[data-testid='delete-dialog-ok-btn']")).toBeTruthy();

    // tap on delete dialog OK button
    const okBtn = wrapper.find("[data-testid='delete-dialog-ok-btn']").first();
    const okBtnOnClick = okBtn.invoke('onClick');
    if (okBtnOnClick) {
      okBtnOnClick({} as any);
    }
    // dispatch should be called once
    expect(mockDispatch).toBeCalledTimes(1);
  });
});
