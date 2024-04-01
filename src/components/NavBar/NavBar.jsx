import { useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu as CardMenu,
  MenuItem
} from '@mui/material'

import { Menu as MenuIcon } from '@mui/icons-material'

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setIsMenuOpen(true)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setIsMenuOpen(false)
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <CardMenu open={isMenuOpen} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem>TODOS</MenuItem>
          <MenuItem>ABOUT</MenuItem>
        </CardMenu>
        <Typography variant="h6" color="inherit" component="div">
          Reboot Academy
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar