enum AlgorithmKey {
  Undefined = 'undefined',
  BubbleSort = 'bubbleSort',
}

type Algorithm = {
  key: AlgorithmKey;
  func: () => void;
};


export {
    AlgorithmKey,
}

export type {
    Algorithm,
}