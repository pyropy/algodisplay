import { SortableValue } from "./types";

const generateValues = (num: number): SortableValue[] => {
  let generatedValues: SortableValue[] = [];
  for (let i = 0; i < num; i++) {
    let node: SortableValue;
    node = {
      index: i,
      value: Math.round(Math.random() * 100),
      sorted: false,
      current: false,
    };
    generatedValues[i] = node;
  }
  return generatedValues;
};

export { generateValues };
