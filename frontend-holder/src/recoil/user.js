import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
    key: 'user',
    default: {
        isLogin: false,
        id: '',
        address: '',
        testAddress: '',
    },
    effects_UNSTABLE: [persistAtom],
});
