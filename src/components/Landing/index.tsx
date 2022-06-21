import React, { useRef, useEffect, useState } from "react";
import LandingUI from "./landing";
import Select from "../Select";

const Landing = () => {
  const [sec, setSec] = useState<number>(3);
  const time = useRef<number>(3);
  const timerId = useRef<any>(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearTimeout(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current == 0) {
      clearInterval(timerId.current);
    }
  }, [sec]);

  if (time.current == 3) {
    return <LandingUI />;
  } else return <Select />;
};

export default Landing;
