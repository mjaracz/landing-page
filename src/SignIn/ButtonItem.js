import * as React from 'react';
import Button from '@material-ui/core/Button/index';
import './ButtonItem.css'

type Props = {
  value: string,
  onClick(): void
}

const ButtonItem = (props: Props) => {
  return(
    <Button
      color='secondary'
      variant='contained'
      className='main__button'
      onClick={props.onClick}
    >
      { props.value }
    </Button>
  )
};


export default ButtonItem;
