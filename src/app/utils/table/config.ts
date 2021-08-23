import moment from 'moment';

import type { URL } from '../../redux/url/url.models';

const dateFormat = 'DD/MM/YYYY';

export enum CellType {
  Label,
  Date,
  Link,
  Delete,
}

export type CellConfig = {
  key: keyof URL;
  label: string;
  type: CellType;
};

export const config: readonly CellConfig[] = Object.freeze([
  {
    key: '_id',
    label: 'Delete',
    type: CellType.Delete,
  },
  {
    key: '_id',
    label: 'ID',
    type: CellType.Label,
  },
  {
    key: 'longUrl',
    label: 'Long URL',
    type: CellType.Link,
  },
  {
    key: 'shortUrl',
    label: 'Short URL',
    type: CellType.Link,
  },
  {
    key: 'shortenId',
    label: 'Shorten ID',
    type: CellType.Label,
  },
  {
    key: 'created_date',
    label: 'Created Date',
    type: CellType.Date,
  },
  {
    key: 'expiry_date',
    label: 'Expiry Date',
    type: CellType.Date,
  },
]);

export const formatDate = (date: string | Date): string =>
  moment(date).format(dateFormat);
