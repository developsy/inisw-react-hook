import React, { useState } from "react";
import Clock from "./Clock";

const App2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  //현재는 마운트만 했지 언마운트를 하지 않아서 시계를 계속 토글하면 계속해서 마운트만 일어남. 네트워크라면 과부하가 걸린다.
  //적절히 언마운트를 시키려면 useEffect를 수정한다.
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}> 시계를 토글합니다. </button>
      {isVisible ? <Clock /> : ""}
    </div>
  );
};

export default App2;
