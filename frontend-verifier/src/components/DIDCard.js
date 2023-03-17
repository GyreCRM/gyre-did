import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

import certificateImage from '@assets/certificate.jpeg';

// https://baobab.scope.klaytn.com/tx/0x717445c5072b7c3b2f807a61b4023b9efe1b15821a08f20e8cb1638aa2da230f
export default function DIDCard(props) {
    const { id, name, studentId, university, course, Date } = props;

    return (
        <Grid item sx={3}>
            <Card sx={{ maxWidth: 345 }} elevation={3}>
                <CardMedia
                    component="img"
                    height="50%"
                    width="50%"
                    image={certificateImage}
                    alt="certification"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {`${university} Certificate`}
                    </Typography>
                    <Typography variant="body2">
                        {`Name: ${name}`} <br />
                        {`Student ID: ${studentId}`} <br />
                        {`University: ${university}`} <br />
                        {`Course: ${course}`} <br />
                        {`Date: ${Date}`} <br />
                        {/* {`DID 고유 번호: ${did}`} <br /> */}
                    </Typography>
                </CardContent>

                {/* <CardActions>
                    <Button
                        disabled={!did}
                        size="small"
                        onClick={() => handleClick(id)}
                    >
                        DID 세부 정보 보기
                    </Button>
                    <Button disabled={!did} size="small">
                        공유하기
                    </Button>
                </CardActions> */}
            </Card>
        </Grid>
    );
}
