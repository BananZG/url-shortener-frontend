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

type CellConfig = {
  key: keyof URL;
  label: string;
  formatter?: (v: string | Date) => string;
};

export const config: CellConfig[] = [
  {
    key: '_id',
    label: 'ID',
  },
  {
    key: 'longUrl',
    label: 'Long URL',
  },
  {
    key: 'shortUrl',
    label: 'Short URL',
  },
  {
    key: 'shortenId',
    label: 'Shorten ID',
  },
  {
    key: 'created_date',
    label: 'Created Date',
    formatter: (v) => moment(v).format(dateFormat),
  },
  {
    key: 'expiry_date',
    label: 'Expiry Date',
    formatter: (v) => moment(v).format(dateFormat),
  },
];

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
