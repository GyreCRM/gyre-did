import React from 'react';
import { Box } from '@mui/material';
import DIDApplicationForm from '../components/DIDApplicationForm';

export default function DIDApplicationPage() {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ p: 2, mt: 2 }} />
            </Box>
            <DIDApplicationForm />
        </Box>
    );
}
