import React from 'react';
import  AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <ToolBar className="header-color">
            <Typography variant="Title" color="inherit">
                <h1>BMW Technician's Checklist</h1>
            </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )
}
export default NavBar;

