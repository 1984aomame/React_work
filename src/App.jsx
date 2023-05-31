import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>JSX記法で書きます</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App; //コンポーネント化
