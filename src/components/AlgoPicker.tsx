import React from "react";

interface Props {
  handleChange: (key: string) => void;
}

const AlgoPicker = ({ handleChange }: Props) => {
  const onChange = (event: any) => {
    handleChange(event.target.value);
  };

  return (
    <div>
      <select id="algorithms" onChange={onChange}>
        <option value="bubbleSort">Bubble Sort</option>
      </select>
    </div>
  );
};

export default AlgoPicker;
