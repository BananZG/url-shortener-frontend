import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';
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

const config: CellConfig[] = [
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

const rows: URL[] = [
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

function App() {
  const [url, setUrl] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  return (
    <>
      <Box
        boxShadow={3}
        margin="10% auto"
        alignItems="center"
        maxWidth={600}
        height={120}
        padding={4}
      >
        <Box component="h2">Paste your URL below</Box>
        <Box display="flex" maxWidth={600}>
          <TextField
            variant="outlined"
            fullWidth
            value={url}
            onChange={handleChange}
          />
          <Button
            variant="outlined"
            onClick={() => {
              console.log(url);
              setUrl('');
            }}
          >
            Go!
          </Button>
        </Box>
      </Box>
      <Card style={{ margin: 30 }}>
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
      </Card>
    </>
  );
}

export default App;
