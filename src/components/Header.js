import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer"
    },
}))

const Header = () => {
    const classes=useStyles();
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography className={classes.title}>Crypto Hunter</Typography>
          <Select variant="outlined" style={{width:100,height:40, marginLeft:15}}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
