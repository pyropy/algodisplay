import React, { useEffect, useState } from "react";
import AlgoPicker from "./AlgoPicker";
import ValueVisualizer from "./ValueVisualizer";
import { useAlgorithm } from "../hooks";
import { AlgorithmKey, SortableValue } from "../types";
import { generateValues } from "../helpers";


const Visualiser = () => {
  const [algorithm, setAlgorithm] = useAlgorithm(AlgorithmKey.Default);
  const tempItems: SortableValue[] = [];
  const [values, setValues] = useState(tempItems);

  useEffect(() => {
    setValues(generateValues(50));
  }, [setValues]);

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
