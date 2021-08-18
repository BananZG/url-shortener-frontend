import type { FC, ReactElement } from 'react';

import React from 'react';
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { CellType, config, formatDate, rows } from './config';

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
                {config.map(({ key, type }) => {
                  let value: any = row[key];
                  switch (type) {
                    case CellType.Label:
                      break;
                    case CellType.Date:
                      value = formatDate(value);
                      break;
                    case CellType.Link:
                      value = (
                        <Link href={value} target="_blank">
                          {value}
                        </Link>
                      );
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
