// @flow
import * as React from 'react';
import './AppBar.css';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import  SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'

import { Link }from 'react-router-dom';
import MenuMobile from '../MenuMobile/MenuMobile';
import MediaQuery from 'react-responsive';


type Props = {
  sticky: boolean
}

const AppBarComponent = (props: Props) => {
  const { sticky } = props;
  return(
    <nav className={sticky ? 'header__appbar --sticky' : 'header__appbar'}>
      <div className='appbar__title'>
        <Link to='/'>SHOPMATE</Link>
      </div>
      <div className='appbar__department'>
        <MediaQuery query='(max-width: 1265px)'>
          <MenuMobile />
        </MediaQuery>
        <li><Link to='/RegionalPage' className='department__regional'>Regional</Link></li>
        <li><Link to='/NaturalPage' className='department__natural'>Natural</Link></li>
        <li><Link to='/SeasonalPage' className='department__seasonal'>Seasonal</Link></li>
      </div>
      <Paper className='appbar__icons' elevation={0}>
        <IconButton className='icons__search' aria-label="Search">
          <SearchIcon />
        </IconButton>
        <InputBase placeholder='Search' />
        <IconButton className='icons__shop' aria-label='Shopping Cart'>
          <ShoppingCart/>
        </IconButton>
      </Paper>
    </nav>
  )
};

export default AppBarComponent;
