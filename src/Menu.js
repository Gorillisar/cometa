import react from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  return (
    <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Menu
        </Button>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby' : 'basic-button',
        }}
        >
          <MenuItem onClick={handleClose}>Sessions</MenuItem>
          <MenuItem onClick={handleClose}>Folders</MenuItem>
          <MenuItem onClick={handleClose}>User guide</MenuItem>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Menu>
    </div>
  );
}