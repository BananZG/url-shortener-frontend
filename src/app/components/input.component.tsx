import type { FC, ReactElement } from 'react';

import React, { useState } from 'react';
import { Box, BoxProps, Button, TextField } from '@material-ui/core';

export const InputComponent: FC<BoxProps> = ({ ...props }): ReactElement => {
  const [url, setUrl] = useState('');
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
  );
};
