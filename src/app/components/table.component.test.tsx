import React from 'react';
import { Provider } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import { Table, TableBody } from '@material-ui/core';

import { TableComponent } from './table.component';
import { createMockStore } from '../utils/test/mockStore';

describe('TableComponent', () => {
  let wrapper: ShallowWrapper;
  const mockStore = createMockStore();

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={mockStore}>
        <TableComponent />
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(wrapper.get(0)).toBeTruthy();
  });
});
