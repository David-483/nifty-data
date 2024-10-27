import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { bgcolor } from '@mui/system';
import GroupIcon from '@mui/icons-material/Group';

export default function LoggedIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
        setAnchorEl(null);
    }
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Dein Profil">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2,}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#283283" }}>{user?.result.firstName.toUpperCase().substring(0, 1)}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            color: "black",
            backgroundColor: "rgba(255,255,255,0.95)",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem style={{color:  "black"}} component={Link} to="/aktienfinder/" >

          <Typography style={{color:"black"}}>
          Aktien
          </Typography>
        </MenuItem>
        <MenuItem style={{color:  "black"}} component={Link} to="/gurus/overview/" >

<Typography style={{color:"black"}}>
Gurus
</Typography>
</MenuItem>

<MenuItem style={{color:  "black"}} component={Link} to="/" >

<Typography style={{color:"black"}}>
Home
</Typography>
</MenuItem>

        <Divider />
        <MenuItem style={{color:  "black"}} component={Link} to="/home/" onClick={logout} >
          <ListItemIcon >
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography style={{color:"black"}}>
          Logout
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}