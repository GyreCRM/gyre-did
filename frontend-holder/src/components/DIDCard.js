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
import { getTx } from '@apis/tx';

const BOOTCAMP_TYPE = {
    1: 'BEB',
    2: 'SEB',
    3: 'PMB',
    4: 'GMB',
};
// https://baobab.scope.klaytn.com/tx/0x717445c5072b7c3b2f807a61b4023b9efe1b15821a08f20e8cb1638aa2da230f
export default function DIDCard(props) {
    const {
        id,
        userId,
        bootcampType,
        fundamentalNumber,
        eduStartDate,
        eduCompleteDate,
        status,
        did,
        createdDate,
    } = props;
    const handleClick = async didId => {
        try {
            const { transactionHash } = await getTx(didId);
            window.open(
                `https://baobab.scope.klaytn.com/tx/${transactionHash}`,
                '_blank',
            );
        } catch (err) {
            alert(err);
        }
    };

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
                        {`${BOOTCAMP_TYPE[bootcampType]} 수료증`}
                    </Typography>
                    <Typography variant="body2">
                        {`유저: ${userId}`} <br />
                        {`기수: ${fundamentalNumber}`} <br />
                        {`교육 시작 날짜: ${eduStartDate}`} <br />
                        {`교육 수료 날짜: ${eduCompleteDate}`} <br />
                    </Typography>
                    {status === 'published' ? (
                        <Typography variant="caption" textAlign="right">
                            {`수료증 발급 날짜: ${createdDate}`} <br />
                            {`DID 고유 번호: ${did}`} <br />
                        </Typography>
                    ) : (
                        <Typography variant="caption" textAlign="right">
                            발급 신청 중... <br />
                            발급은 대략 1 ~ 2일 정도 소요됩니다.
                        </Typography>
                    )}
                </CardContent>

                <CardActions>
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
                </CardActions>
            </Card>
        </Grid>
    );
}

DIDCard.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    bootcampType: PropTypes.number.isRequired,
    fundamentalNumber: PropTypes.number.isRequired,
    eduStartDate: PropTypes.string.isRequired,
    eduCompleteDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    did: PropTypes.number.isRequired,
    createdDate: PropTypes.string.isRequired,
};
