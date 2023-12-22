import React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" elevation={0} color='transparent'>
            <Container
                maxWidth="xxl"
                sx={{
                    px: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Toolbar disableGutters>
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <img
                            src={logo}
                            alt='logo'
                            style={{ cursor: 'pointer' }}
                            width="280"
                            height="40"
                        />
                    </Link>
                    {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}
                    <Button color="inherit">
                        Register
                    </Button>
                    <Button color="inherit" variant="outline">
                        Sign In
                    </Button>
                    {/* </Box> */}
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Navbar;
