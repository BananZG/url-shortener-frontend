import type { FC, ReactElement } from 'react';

import React, { useState } from 'react';
import {
  Box,
  BoxProps,
  Button,
  CircularProgress,
  IconButton,
  TextField,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { addUrl } from '../redux/url/urlSlice';

export const InputComponent: FC<BoxProps> = ({ ...props }): ReactElement => {
  const [url, setUrl] = useState('');
  const loading = useAppSelector((state) => state.url.addingUrl);
  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  return (
    <Box {...props}>
      <Box component="h2">Paste your URL below</Box>
      <Box display="flex" maxWidth={600}>
        <TextField
          variant="outlined"
          fullWidth
          value={url}
          onChange={handleChange}
        />
        {(loading && (
          <IconButton>
            <CircularProgress />
          </IconButton>
        )) || (
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(addUrl(url));
              setUrl('');
            }}
          >
            Go!
          </Button>
        )}
      </Box>
    </Box>
  );
};
