import type { FC, ReactElement } from 'react';

import React from 'react';
import { Card } from '@material-ui/core';

import { InputComponent } from '../../components/input/input.component';
import { TableComponent } from '../../components/table/table.component';

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
        marginBottom={8}
      />
      <Card style={{ margin: 30 }}>
        <TableComponent />
      </Card>
    </>
  );
};

export default App;
