import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DIDApplicationButton() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/did/create');
    }
    return (
        <Box>
            <Button
                variant="contained"
                color="success"
                onClick={() => handleClick()}
            >
                발급 신청하기
            </Button>
        </Box>
    );
}
