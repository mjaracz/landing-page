//@flow
import * as React from 'react';
import '../Header.css';
import {ArrowBack, ArrowForward} from "@material-ui/icons";

import './Pagination.css';

interface Props {
  onClickArrow(): void,
  onClickNumber(): void
}

const Pagination = (props: Props) => {
  return (
    <div>
      <div className='header__pageNumber'>
        <div className='pageNumber__arrow' onClick={() => props.onClickArrow(false)}>
          <ArrowBack/>
        </div>
        <div className='pageNumber__item' onClick={() => props.onClickNumber(1)}>
          1
        </div>
        <div className='pageNumber__item' onClick={() => props.onClickNumber(2)}>
          2
        </div>
        <div className='pageNumber__item' onClick={() => props.onClickNumber(3)}>
          3
        </div>
        <div className='pageNumber__arrow' onClick={() => props.onClickArrow(true)}>
          <ArrowForward/>
        </div>
      </div>
    </div>
  )
};

export default Pagination;
