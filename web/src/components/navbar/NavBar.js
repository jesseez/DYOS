import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './NavBar.css';
import navOptions from './NavOptions';

export default class NavBar extends React.Component {
    render() {
        return (
            <AppBar position="static" id="NavBar">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flex: 1 }}
                        >
                            Do Your Own Swing
                        </Typography>
                        <Box sx={{ flex: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly'}}>
                            {navOptions.map((option) => ( 
                                <Button 
                                    key={option.displayName}
                                    sx={{ marginY: 2, color: 'white', display: 'block', textTransform: 'none' }}
                                    href={option.url}>
                                        {option.displayName}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
}
