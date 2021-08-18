import { FC, ReactElement } from 'react';

import React from 'react';
import { LinearProgress, Link, TableCell, TableRow } from '@material-ui/core';

import type { URL } from '../redux/url/urlSlice';
import { CellConfig, CellType, formatDate } from './config';

export interface TableBodyRowsProps {
  loading: boolean;
  rows: URL[];
  config: CellConfig[];
}

export const TableBodyRows: FC<TableBodyRowsProps> = ({
  loading,
  rows,
  config,
}): ReactElement => {
  if (loading) {
    return (
      <TableRow>
        <TableCell colSpan={config.length}>
          <LinearProgress data-testid="linear-progress-bar" />
        </TableCell>
      </TableRow>
    );
  }
  if (!rows.length) {
    return (
      <TableRow>
        <TableCell data-testid="table-no-data" colSpan={config.length}>
          NO DATA
        </TableCell>
      </TableRow>
    );
  }
  return (
    <>
      {rows.map((row, i) => (
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
      ))}
    </>
  );
};
