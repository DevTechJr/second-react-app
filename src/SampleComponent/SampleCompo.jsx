import "./SampleCompo.css";
import React from "react";
import { render } from "react-dom";
import { useState } from "react";

const SampleCompo = () => {
  const [age, setAge] = useState(14);
  const changeAge = () => {
    setAge(age + 1);
    console.log(`(Increase)Age : ${age}`);
  };
  const downAge = () => {
    setAge(age - 1);
    console.log(`(Decrease)Age : ${age}`);
  };
  return (
    <div className="sample-compo">
      <h1>
        Change Age State Hook Trial <span>Button</span>
      </h1>
      <p>Current Age : {age}</p>
      <button onClick={changeAge}>Change Age</button>
      <button onClick={downAge}>Down Age</button>
    </div>
  );
};

export default SampleCompo;
