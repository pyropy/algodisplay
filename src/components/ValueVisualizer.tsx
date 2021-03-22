import React from "react";

import { SortableValue } from "../types";

const ValueVisualizer = (props: SortableValue) => {
  return (
    <React.Fragment>
      <div
        className={"bar"}
        style={{ height: (props.value * 0.4).toString() + "em" }}
      />
    </React.Fragment>
  );
};

export default ValueVisualizer;
