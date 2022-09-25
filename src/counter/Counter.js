import React from "react";
import { useState } from "react";
import "../App.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const tambah = () => {
    setCounter(counter + 1);
  };
  const kurang = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <p>Counter</p>
      <p>Hasil : {counter} </p>
      <div className="button">
        <button onClick={tambah}>+</button>
        <button onClick={counter < 0 ? setCounter(0) : kurang}>-</button>
      </div>
    </div>
  );
}
