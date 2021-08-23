import React from 'react';
import { mount } from 'enzyme';
import { Table, TableBody } from '@material-ui/core';

import type { TableBodyRowsProps } from './table-rows.component';
import { TableBodyRows } from './table-rows.component';
import { createMockStore, dummyUrl } from '../../utils/test/mockStore';
import { Provider } from 'react-redux';

describe('TableBodyRows', () => {
  const store = createMockStore();
  const defaultProps: TableBodyRowsProps = {
    loading: false,
    rows: [dummyUrl],
  };

  const render = (props: TableBodyRowsProps) =>
    mount(
      <Provider store={store}>
        <Table>
          <TableBody>
            <TableBodyRows {...props} />
          </TableBody>
        </Table>
      </Provider>,
    );

  it('should render correctly', () => {
    const wrapper = render(defaultProps);
    expect(wrapper.get(0)).toBeTruthy();
    expect(wrapper.exists("[data-testid='table-no-data']")).toBeFalsy();
    expect(wrapper.exists("[data-testid='linear-progress-bar']")).toBeFalsy();
  });

  it('should render no data', () => {
    const wrapper = render({ ...defaultProps, rows: [] });
    expect(wrapper.exists("[data-testid='table-no-data']")).toBeTruthy();
    expect(wrapper.exists("[data-testid='linear-progress-bar']")).toBeFalsy();
  });

  it('should render loading', () => {
    const wrapper = render({ ...defaultProps, loading: true });
    expect(wrapper.exists("[data-testid='table-no-data']")).toBeFalsy();
    expect(wrapper.exists("[data-testid='linear-progress-bar']")).toBeTruthy();
  });
});
