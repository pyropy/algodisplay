import { useEffect, useState } from "react";

enum AlgorithmKey {
  Undefined,
  BubbleSort,
}

const bubbleSort = () => {
  console.log("BubbleSort");
};

type Algorithm = {
  key: AlgorithmKey;
  func: () => void;
};

function useAlgorithm(algorithmKey: AlgorithmKey): [Algorithm, any] {
  const [algorithm, setAlgorithm] = useState({
    key: algorithmKey,
    func: () => {},
  });

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
            func: () => {},
          });
      }
    }
    handleAlgorithmChange(algorithmKey);
  }, [algorithmKey]);

  return [algorithm, setAlgorithm];
}

export { useAlgorithm, AlgorithmKey };
