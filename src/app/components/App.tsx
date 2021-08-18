import type { FC, ReactElement } from 'react';

import React from 'react';
import { Card } from '@material-ui/core';

import { InputComponent } from './input.component';
import { TableComponent } from './table.component';

const App: FC = (): ReactElement => {
  return (
    <>
      <InputComponent
        boxShadow={3}
        margin="10% auto"
        alignItems="center"
        maxWidth={600}
        height={120}
        padding={4}
      />
      <Card style={{ margin: 30 }}>
        <TableComponent />
      </Card>
    </>
  );
};

export default App;
