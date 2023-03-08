import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { userState } from '@recoil/user';
import { useRecoilValue } from 'recoil';
import { postDid } from '../apis/did';

const theme = createTheme();

export default function DIDApplicationForm() {
    const user = useRecoilValue(userState);
    const [values, setValues] = useState({
        name: '',
        studentId: '',
        university: '',
        course: '',
        eduDate: '',
    });
    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const clickOk = window.confirm('Are you sure you want to request?');
            if (clickOk) {
                const response = await postDid(values);
                if (!response) {
                    alert('Request failed');
                    return;
                }
            } else {
                alert('Cancel was pressed');
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
                    <Avatar sx={{ m: 1, bgcolor: green[500] }}>
                        <DocumentScannerIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        DID Claim
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
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">
                                        University Name
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="university"
                                        name="university"
                                        label="University Name"
                                        defaultValue=""
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="TON University">
                                            TON University
                                        </MenuItem>
                                        <MenuItem
                                            value="Cardano University"
                                            disabled
                                        >
                                            Cardano University
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">
                                        Course Name
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="course"
                                        name="course"
                                        label="Course Name"
                                        defaultValue=""
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="FunC Demo Class">
                                            FunC Demo Class
                                        </MenuItem>
                                        <MenuItem value="hackaTon Class">
                                            hackaTon Class
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="eduDate"
                                    label="Date"
                                    type="date"
                                    id="eduDate"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    autoComplete="new-eduDate"
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
                            Request DID Certificate
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
