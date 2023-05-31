import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  //Too many re-renders のエラーになる例
  if (num % 3 === 0) {
    setFaceShowFlag(true); //ここでいずれの場合もStateの変更がありAppループになる
  } else {
    setFaceShowFlag(false);
  }
  return (
    <>
      <h1 style={{ color: "red" }}>JSX記法で書きます</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*_*)</p>}
    </>
  );
};

export default App; //コンポーネント化
