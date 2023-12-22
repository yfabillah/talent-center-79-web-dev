// SearchBox.js
import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBox = () => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            placeholder="Try JavaScript.."
            sx={{
                backgroundColor: 'white',
                borderRadius: '36px',
                width: '45%', // Atur width menjadi 3/4 (75%)
                margin: 'auto', // Untuk memusatkan input jika diperlukan
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                '& .MuiOutlinedInput-root': {
                    borderRadius: '36px',
                    color: 'black', // Atur warna teks menjadi hitam
                    margin: 'auto',
                },
            }}
        />
    );
};

export default SearchBox;
