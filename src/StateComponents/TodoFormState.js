import { useState } from "react";

export default initialValue => {
  const [value, setValue] = useState("");
  const reset = () => {
    setValue("");
  };
  const onChange = event => {
    setValue(event.target.value);
  };
  return {
    value,
    reset,
    onChange
  };
};
