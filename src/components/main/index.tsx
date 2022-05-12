import React, {useRef} from "react";
import * as S from "./style";
import {useEffect, useState} from "react";

export const Main = () => {
   const Timer = () => {
      const [min, setMin] = useState<number>(3);
      const [sec, setSec] = useState<number>(0);
      const time = useRef(180);
      const timerId = useRef<any>(null);

      useEffect(() => {
         timerId.current = setInterval(() => {
            setMin(parseInt(time.current) / 60);
            setSec(time.current % 60);
            time.current -= 1;
         }, 1000);

         return () => clearTimeout(timerId.current);
      }, []);

      useEffect(() => {
         if (time.current <= 0) {
            console.log("시간 끝");
            clearInterval(timerId.current);
         }
      }, [sec]);
      return (
        <>
           <div>{min}분 {sec}</div>
        </>
      )
   }

   return (
     <S.Positioner>
        <Timer/>
        <S.Wrapper>
           <S.Text>Ayo The</S.Text>
           <S.Title>Pizza Here 🍕</S.Title>
           <S.Copyright>© Nayejun</S.Copyright>
        </S.Wrapper>
     </S.Positioner>
   );
}