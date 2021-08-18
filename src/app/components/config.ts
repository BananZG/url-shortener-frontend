import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

type URL = {
  _id: string;
  longUrl: string;
  shortUrl: string;
  shortenId: string;
  created_date: Date;
  expiry_date: Date;
};

export enum CellType {
  Label,
  Date,
  Link,
}

export type CellConfig = {
  key: keyof URL;
  label: string;
  type: CellType;
};

export const config: CellConfig[] = [
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
];

export const formatDate = (date: string | Date): string =>
  moment(date).format(dateFormat);
