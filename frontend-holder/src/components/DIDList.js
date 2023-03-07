import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Contaier from '@mui/material/Container';

import { userState } from '@recoil/user';
import { useRecoilValue } from 'recoil';
import { getDids } from '../apis/did';
import DIDCard from './DIDCard';

export default function DIDList() {
    const user = useRecoilValue(userState);
    const [dids, setDids] = useState([]);

    useEffect(async () => {
        setDids(await getDids(user.id));
    }, []);
    return (
        <Contaier>
            <Grid
                container
                spacing={5}
                alignItems="center"
                justifyContent="center"
            >
                {dids.map(did => (
                    <DIDCard
                        key={did.id}
                        id={did.id}
                        userId={did.userId}
                        bootcampType={did.bootcampType}
                        fundamentalNumber={did.fundamentalNumber}
                        eduStartDate={did.eduStartDate}
                        eduCompleteDate={did.eduCompleteDate}
                        status={did.status}
                        did={did.did}
                        createdDate={did.createdDate}
                    />
                ))}
            </Grid>
        </Contaier>
    );
}
