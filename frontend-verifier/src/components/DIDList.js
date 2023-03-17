import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Contaier from '@mui/material/Container';

import { userState } from '@recoil/user';
import { useRecoilValue } from 'recoil';
import { getDids } from '../apis/did';
import DIDCard from './DIDCard';

export default function DIDList() {
    const user = useRecoilValue(userState);
    const [dids, setDids] = useState([
        {
            id: 0,
            name: 'gyre',
            studentId: '12345',
            university: 'Ton University',
            course: 'Func Demo Class',
            Date: '2021-09-01',
        },
    ]);

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
                        name={did.name}
                        studentId={did.studentId}
                        university={did.university}
                        course={did.course}
                        Date={did.Date}
                    />
                ))}
            </Grid>
        </Contaier>
    );
}
