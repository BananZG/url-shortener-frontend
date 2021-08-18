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
  const onSubmit = (): void => {
    dispatch(addUrl(url));
    setUrl('');
  };
  const onClear = (): void => {
    dispatch(clearAddUrlState());
  };
  return (
    <Box {...props}>
      <Box component="h2">Paste your URL below</Box>
      <Box display="flex" maxWidth={600}>
        <TextField
          data-testid="url-tf"
          variant="outlined"
          fullWidth
          value={url}
          onChange={handleChange}
        />
        {(loading && (
          <IconButton>
            <CircularProgress data-testid="circular-progress-btn" />
          </IconButton>
        )) || (
          <Button
            disabled={!url.length}
            variant="contained"
            color="primary"
            data-testid="shorten-btn"
            onClick={onSubmit}
          >
            Go!
          </Button>
        )}
      </Box>
      {!!newUrl && (
        <Alert
          data-testid="new-url-success-alert"
          severity="success"
          onClose={onClear}
        >
          <AlertTitle>Success</AlertTitle>
          Generated:{' '}
          <Link href={newUrl.shortUrl} target="_blank">
            {newUrl.shortUrl}
          </Link>
        </Alert>
      )}
      {!!newUrlError && (
        <Alert
          data-testid="new-url-error-alert"
          severity="error"
          onClose={onClear}
        >
          <AlertTitle>Error</AlertTitle>
          Generation failed: {newUrlError}
        </Alert>
      )}
    </Box>
  );
};
