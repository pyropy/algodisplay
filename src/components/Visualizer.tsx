import React, {useEffect, useState} from "react";
import AlgoPicker from "./AlgoPicker";
import ValueVisualizer from "./ValueVisualizer";
import { useAlgorithm } from "../hooks";
import { AlgorithmKey, SortableValue } from "../types";

const generateItems = (num: number): SortableValue[] => {
  let generatedNodes: SortableValue[] = []
  for (let i = 0; i < num; i++) {
      let node: SortableValue;
      node = {
          index: i,
          value: Math.round(Math.random() * 100),
          sorted: false,
      }
      generatedNodes[i] = node;
  }
  return generatedNodes;
}

const Visualiser = () => {
  const [algorithm, setAlgorithm] = useAlgorithm(AlgorithmKey.Default);
  const tempItems: SortableValue[] = [];
  const [values, setValues] = useState(tempItems);

  useEffect(() => {
    setValues(generateItems(50))
  }, [setValues])

  const algorithmChange = (algorithmKey: string) => {
    setAlgorithm(algorithmKey);
  };

  const sort = () => {
    setValues(algorithm.func(values))
  }

  return (
    <div>
      <div className="bar-list">
                {
                    values.map((item, index) => <ValueVisualizer key={index} value={item.value} sorted={item.sorted} index={item.index}/>)
                }
            </div>
      <button onClick={sort}>Algorithmize</button>
      <AlgoPicker handleChange={algorithmChange} />
    </div>
  );
};

export default Visualiser;
