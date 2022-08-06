import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Navigate, useNavigate} from "react-router-dom"
import Digitalwatch from './Digitalwatch';

export default function Navbar() {
const navigate = useNavigate()
    const handleClick = () =>{
navigate("/login")
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit"> <Digitalwatch/> </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Syoft
          </Typography>
          <Button color="inherit" onClick={handleClick}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
