import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";

const options = [
  'Regional',
  'Natural',
  'Seasonal'
];

const ITEM_HEIGHT = 48;

class MenuMobile extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          color='#ffffff'
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            },
          }}
        >
          {options.map(option => (
            <Link to={`${option}Page`} className='department--mobile'>
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                {option}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MenuMobile;
