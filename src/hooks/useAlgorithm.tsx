import { useEffect, useState } from "react";
import { AlgorithmKey, Algorithm } from "../types";
import * as algorithms from "../algorithms";

function useAlgorithm(algorithmKey: AlgorithmKey): [Algorithm, any] {
  const [algorithm, setAlgorithm] = useState({
    key: algorithmKey,
    func: algorithms.bubbleSort,
  });

  const [key, setAlgorithmKey] = useState(algorithmKey);

  useEffect(() => {
    function handleAlgorithmChange(algorithmKey: AlgorithmKey) {
      switch (algorithmKey) {
        case AlgorithmKey.BubbleSort:
          setAlgorithm({
            key: AlgorithmKey.BubbleSort,
            func: algorithms.bubbleSort,
          });
          break;
        default:
          setAlgorithm({
            key: AlgorithmKey.BubbleSort,
            func: algorithms.bubbleSort,
          });
      }
    }
    handleAlgorithmChange(key);
  }, [key]);

  return [algorithm, setAlgorithmKey];
}

export default useAlgorithm;
