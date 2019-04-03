import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import './TextFields.css';

interface Props {
  TextField: {
    name: string,
    type: string,
    autoComplete: string
  }
}

export const TextFields = (props: Props) => {
  return(
    <TextField
      className="main__input"
      label={props.TextField.name}
      type={props.TextField.type}
      name={props.TextField.name}
      onChange={e => props.onChange(e)}
      autoComplete={props.TextField.autoComplete}
      variant="outlined"
      margin="normal"
      reguired={true}
    />
  )
};
