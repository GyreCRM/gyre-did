import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
    const savedCallback = useRef(); // 가장 최근의 callback을 저장할 ref 생성

    useEffect(() => {
        savedCallback.current = callback; // callback이 바뀔 때마다 ref 업데이트
    }, [callback]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        function tick() {
            savedCallback.current(); // 1 tick 당 callback 함수 실행
        }

        if (delay !== null) {
            // 만약 delay가 null이 아니라면
            const id = setInterval(tick, delay); // delay에 맞춰 interval을 새로 실행
            return () => clearInterval(id); // unmount될 때 clearInterval 실행
        }
    }, [delay]); // delay가 바뀔 때마다 새로 실행
}
