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

type CellConfig = {
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

export const rows: URL[] = [
  {
    _id: '611c72463ad4baf21dad498f',
    longUrl:
      'https://blog.gds-gov.tech/terragrunt-in-retro-i-would-have-done-these-few-things-e5aaac451942',
    shortUrl: 'http://localhost:XXXX/gL6bm_LWJ',
    shortenId: 'gL6bm_LWJ',
    created_date: new Date(),
    expiry_date: new Date(),
  },
  {
    _id: '611c72b83ad4baf21dad4992',
    longUrl:
      'https://blog.gds-gov.tech/terragrunt-in-retro-i-would-have-done-these-few-things-e5aaac451942',
    shortUrl: 'http://localhost:XXXX/HZyZz3IOH',
    shortenId: 'HZyZz3IOH',
    created_date: new Date(),
    expiry_date: new Date(),
  },
];
