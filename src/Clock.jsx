import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  //적절히 언마운트 하려면 useEffect의 리턴값인 함수를 이용한다.
  useEffect(() => {
    console.log("### Clock component is mounted!!");
    let handle = setInterval(() => {
      setTime(new Date());
      console.log("### Time is updated");
    }, 1000);
    return () => {
      console.log("### Clock component will be unmounted!!");
      clearInterval(handle);
    };
  }, []);

  return (
    <div>
      <h2>{time.toTimeString()}</h2>
    </div>
  );
};
export default Clock;
