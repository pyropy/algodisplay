import React from "react";
import AlgoPicker from "./AlgoPicker";
import { useAlgorithm } from "../hooks";
import { AlgorithmKey } from "../types";

const Visualiser = () => {
  const [algorithm, setAlgorithm] = useAlgorithm(AlgorithmKey.Undefined);

  const algorithmChange = (algorithmKey: string) => {
    setAlgorithm(algorithmKey);
  };

  return (
    <div>
      <div>Visualise Alrogithm Outputs Here</div>
      <button onClick={algorithm.func}>Algorithmize</button>
      <AlgoPicker handleChange={algorithmChange} />
    </div>
  );
};

export default Visualiser;
