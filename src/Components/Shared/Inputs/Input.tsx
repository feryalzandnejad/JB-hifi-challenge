import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {InputProps} from '../../../utils/types';

const Input = ({label, onChange, value, name}: InputProps) => {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label={label}
        onChange={onChange}
        value={value}
        name={name}
      />
    </Box>
  );
};

export default Input;