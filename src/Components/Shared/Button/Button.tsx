import Stack from '@mui/material/Stack';

import { ButtonStyles } from './Button.styles';

import { BoxProps } from '../../../utils/types';

const Button = ({children, onClick, disabled}: BoxProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <ButtonStyles variant="contained" onClick={onClick} disabled={disabled}>
        {children}
      </ButtonStyles>
    </Stack>
  );
};

export default Button;