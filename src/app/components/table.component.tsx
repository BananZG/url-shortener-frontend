import type { FC, ReactElement } from 'react';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { config, rows } from './config';

export const TableComponent: FC = ({}): ReactElement => {
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
          {(rows.length > 0 &&
            rows.map((row, i) => (
              <TableRow key={i}>
                {config.map(({ key, formatter }) => {
                  let value = row[key];
                  if (formatter) {
                    value = formatter(value);
                  }
                  return (
                    <TableCell component="th" key={key}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))) || (
            <TableRow>
              <TableCell>NO DATA</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
