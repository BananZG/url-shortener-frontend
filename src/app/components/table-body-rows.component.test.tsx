import React from 'react';
import { mount } from 'enzyme';
import { Table, TableBody } from '@material-ui/core';

import type { TableBodyRowsProps } from './table-body-rows.component';
import { TableBodyRows } from './table-body-rows.component';
import { config } from './config';

describe('TableBodyRows', () => {
  const defaultProps: TableBodyRowsProps = {
    config,
    loading: false,
    rows: [
      {
        _id: '',
        longUrl: 'https://example.com',
        shortUrl: 'https://e.com/a',
        shortenId: 'a',
        created_date: new Date(),
        expiry_date: new Date(),
      },
    ],
  };

  const render = (props: TableBodyRowsProps) =>
    mount(
      <Table>
        <TableBody>
          <TableBodyRows {...props} />
        </TableBody>
      </Table>,
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
