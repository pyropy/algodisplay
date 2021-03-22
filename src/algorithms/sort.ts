import { SortableValue } from "../types";

const bubbleSort = (values: SortableValue[]): SortableValue[][] => {
  let steps = [];
  for (let i = 1; i < values.length; i++) {
    for (let j = 0; j < values.length - 1; j++) {
      if (values[j].value > values[j + 1].value) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]];
      }
    }
    steps[i] = [...values];
  }
  return steps;
};

export { bubbleSort };
