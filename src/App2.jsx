import React, { useState } from "react";
import Clock from "./Clock";

const App2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}> 시계를 토글합니다. </button>
      {isVisible ? <Clock /> : ""}
    </div>
  );
};

export default App2;
