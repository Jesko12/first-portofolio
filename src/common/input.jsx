import React from "react";
import { FormInput, FormLabel } from "./CommonElements";

const Input = ({ error, name, label, ...rest }) => {
  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormInput {...rest} id={name} name={name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
