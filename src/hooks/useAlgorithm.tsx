import { useEffect, useState } from "react";
import { AlgorithmKey, Algorithm } from "../types";

const bubbleSort = () => {
  console.log("BubbleSort");
};
function useAlgorithm(algorithmKey: AlgorithmKey): [Algorithm, any] {
  const [algorithm, setAlgorithm] = useState({
    key: algorithmKey,
    func: () => {},
  });

  const [key, setAlgorithmKey] = useState(algorithmKey);

  useEffect(() => {
    function handleAlgorithmChange(algorithmKey: AlgorithmKey) {
      switch (algorithmKey) {
        case AlgorithmKey.BubbleSort:
          setAlgorithm({
            key: AlgorithmKey.BubbleSort,
            func: bubbleSort,
          });
          break;
        default:
          setAlgorithm({
            key: AlgorithmKey.Undefined,
            func: () => {
              console.log("default");
            },
          });
      }
    }
    handleAlgorithmChange(key);
  }, [key]);

  return [algorithm, setAlgorithmKey];
}

export default useAlgorithm;
