import React from "react";
import { FormInputFile, FormLabel } from "./CommonElements";

const InputFile = ({ error, name, label, ...rest }) => {
  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormInputFile {...rest} id={name} name={name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default InputFile;
