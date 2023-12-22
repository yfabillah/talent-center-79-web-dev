import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import SearchBox from './Search.jsx';

import Navbar from './Navbar.jsx';
import bgImage from '../assets/main/bgImage.png';
// import SearchNav from 'Search.jsx';


const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    }
    return (
        <Container
            maxWidth="false"
            disableGutters
            sx={{
                p: {
                    xs: 2,
                    sm: 5,
                    md: 2,
                },
                background: `url(${bgImage}) center center/cover`,
                minHeight: '1200px',
                borderRadius: {
                    xs: '0px 0px 27px 27px',
                    md: '0px 0px 54px 54px',
                }
            }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}>
                <Navbar />
                <Typography sx={{
                    color: "#fff",
                    marginTop: "255px",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: {
                        xs: "38px",
                        md: "48px",
                    },
                    lineHeight: "62px",
                }}>
                    Welcome To
                </Typography>
                <Typography sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: {
                        xs: "38px",
                        md: "48px",
                    },
                    lineHeight: "62px",
                    mb: 4,
                }}>
                    Talent Center 79
                </Typography>
            </Box>
            <SearchBox onSearch={handleSearch} />
            <p>Search Query: {searchQuery}</p>
        </Container >
    )
}

export default Hero