import React, { useState } from "react";
import AlgoPicker from "./AlgoPicker";
import ValueVisualizer from "./ValueVisualizer";
import { useAlgorithm } from "../hooks";
import { AlgorithmKey } from "../types";
import { generateValues } from "../helpers";


const Visualiser = () => {
  const [algorithm, setAlgorithm] = useAlgorithm(AlgorithmKey.Default);
  const [values, setValues] = useState(generateValues(50));

  const algorithmChange = (algorithmKey: string) => {
    setAlgorithm(algorithmKey);
  };

  const sort = () => {
    const steps = algorithm.func(values);
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setValues(step);
      }, idx * 100);
    });
  };

  return (
    <div>
      <div className="bar-list">
        {values.map((item, index) => (
          <ValueVisualizer
            key={index}
            value={item.value}
            sorted={item.sorted}
            current={item.current}
            index={item.index}
          />
        ))}
      </div>
      <button onClick={sort}>Algorithmize</button>
      <AlgoPicker handleChange={algorithmChange} />
    </div>
  );
};

export default Visualiser;
