import { FC, ReactElement, useEffect } from 'react';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { config } from './config';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchAllUrls } from '../redux/url/urlSlice';
import { TableBodyRows } from './table-body-rows.component';

export const TableComponent: FC = ({}): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllUrls());
  }, [dispatch]);
  const rows = useAppSelector((state) => state.url.allUrl);
  const loading = useAppSelector((state) => state.url.loadingList);
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {config.map(({ key, label }) => (
              <TableCell key={key}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableBodyRows loading={loading} rows={rows} config={config} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
