import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import { blue, green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { userState } from '@recoil/user';
import { useRecoilValue } from 'recoil';

const theme = createTheme();

export default function DIDApplicationForm() {
    const user = useRecoilValue(userState);
    const [values, setValues] = useState({
        name: '',
        studentId: '',
    });
    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            if (values.name === 'gyre' && values.studentId === '12345') {
                // const response = await postDid(values);
                navigate('/did/view');
            } else {
                alert('Not verified');
            }
        } catch (err) {
            console.log('Server Error', err);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                        <FactCheckIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        DID Verify
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            {/* <Grid item xs={12}>
                                <TextField
                                    value={values.userId}
                                    disabled
                                    name="userId"
                                    required
                                    fullWidth
                                    id="userId"
                                    label="user ID"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="name"
                                    label="Name"
                                    type="name"
                                    id="name"
                                    autoComplete="new-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="studentId"
                                    label="Student ID"
                                    id="studentId"
                                    autoComplete="new-studentID"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Verify DID Certificate
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
