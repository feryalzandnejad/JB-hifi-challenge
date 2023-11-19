import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {TextFiledProps} from '../../../utils/types';

const TextFields = ({label, onChange, value}:TextFiledProps) => {

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
        id="outlined-uncontrolled"
        label={label}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};

export default TextFields;