import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("gdhong");

  //이 함수는 컴포넌트가 마운트, 업데이트 될 때 마다 실행된다.
  //두 번째 인자로 의존성 그래프를 넣으면 이 그래프에 등록된 state나 속성이 바뀔 때만 호출된다.
  //이를 지정하지 않으면 컴포넌트가 마운트될 때만 실행된다. 그 어떤 변경에도 호출되지 않음.
  useEffect(() => {
    console.log(`### count: ${count}`);
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <span>이름: {name}</span>
    </div>
  );
};

export default App;
