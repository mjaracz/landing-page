import * as React from 'react';
import Button from '@material-ui/core/Button/index';
import './ButtonItem.css'

type Props = {
  value: string
}

const ButtonItem = (props: Props) => {
  return(
    <Button
      color='secondary'
      variant='contained'
      className='main__button'
    >
      { props.value }
    </Button>
  )
};


export default ButtonItem;
