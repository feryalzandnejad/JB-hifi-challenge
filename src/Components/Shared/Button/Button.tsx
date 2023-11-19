import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ButtonStyles } from './Button.styles';

type BoxProps = {
  children: React.ReactNode;
  onClick: any;
  disabled: boolean;
};

const Buttons = ({children, onClick, disabled}: BoxProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <ButtonStyles variant="contained" onClick={onClick} disabled={disabled}>
        {children}
      </ButtonStyles>
    </Stack>
  );
};

export default Buttons;