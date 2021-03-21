enum AlgorithmKey {
  Default = 'default',
  BubbleSort = 'bubbleSort',
}

type SortableValue = {
  value: number,
  sorted: boolean,
  index: number,
}

type Algorithm = {
  key: AlgorithmKey,
  func: (values: SortableValue[]) => SortableValue[],
};

export {
    AlgorithmKey,
}

export type {
    Algorithm,
    SortableValue
}