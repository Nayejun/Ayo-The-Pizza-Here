import React, {useRef, useEffect, useState} from "react";
import * as S from "./style";
import Main from "../Main";

export const Landing = () => {
   const [sec, setSec] = useState<number>(3);
   const time = useRef<number>(3);
   const timerId = useRef<any>(null);

   useEffect(() => {
      timerId.current = setInterval(() => {
         setSec(time.current % 60);
         time.current -= 1;
      }, 1000)

      return () => clearTimeout(timerId.current);
   }, [])

   useEffect(() => {
      if (time.current == 0) {
         console.log("시간 끝, 화면전환");
         clearInterval(timerId.current);
      }
   }, [sec]);

   if (time.current == 3) {
      return (
        <>
           <S.Positioner>
              <S.Wrapper>
                 <S.Text>Ayo The</S.Text>
                 <S.Title>Pizza Here 🍕</S.Title>
                 <S.Copyright>© Nayejun</S.Copyright>
              </S.Wrapper>
           </S.Positioner>
        </>
      )
   } else
      return <Main/>
}
