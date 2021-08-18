import type { FC, ReactElement } from 'react';

import React, { useState } from 'react';
import {
  Box,
  BoxProps,
  Button,
  CircularProgress,
  IconButton,
  Link,
  TextField,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { addUrl, clearAddUrlState } from '../redux/url/urlSlice';

export const InputComponent: FC<BoxProps> = ({ ...props }): ReactElement => {
  const [url, setUrl] = useState('');
  const loading = useAppSelector((state) => state.url.addingUrl);
  const newUrl = useAppSelector((state) => state.url.tempUrlInfo);
  const newUrlError = useAppSelector((state) => state.url.addUrlError);
  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const clear = (): void => {
    dispatch(clearAddUrlState());
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
            disabled={!url.length}
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(addUrl(url));
              setUrl('');
            }}
          >
            Go!
          </Button>
        )}
      </Box>
      {!!newUrl && (
        <Alert severity="success" onClose={clear}>
          <AlertTitle>Success</AlertTitle>
          New url generated:{' '}
          <Link href={newUrl.shortUrl} target="_blank">
            {newUrl.shortUrl}
          </Link>
        </Alert>
      )}
      {!!newUrlError && (
        <Alert severity="error" onClose={clear}>
          <AlertTitle>Error</AlertTitle>
          New url generation failed: {newUrlError}
        </Alert>
      )}
    </Box>
  );
};
