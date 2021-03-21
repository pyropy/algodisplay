import React from "react";
import { useAlgorithm, AlgorithmKey } from "../hooks/useAlgorithm";

const Visualiser = () => {
  const [algorithm] = useAlgorithm(AlgorithmKey.BubbleSort);

  return (
    <div>
      <div>Visualise Alrogithm Outputs Here</div>
      <button onClick={algorithm.func}>Algorithmize</button>
    </div>
  );
};

export default Visualiser;
