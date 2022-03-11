import React from "react";
import { InputTextArea, FormLabel } from "./CommonElements";

const TextArea = ({ error, name, label, ...rest }) => {
  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputTextArea {...rest} id={name} name={name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default TextArea;