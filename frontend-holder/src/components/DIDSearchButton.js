import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DIDSearchButton() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/did/search');
    }
    return (
        <Box>
            <Button variant="contained" onClick={() => handleClick()}>
                발급 조회하기
            </Button>
        </Box>
    );
}
