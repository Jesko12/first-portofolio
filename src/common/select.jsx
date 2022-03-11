import React from "react";
import { FormLabel, FormSelect } from "./CommonElements";

const Select = ({ error, label, name, options, ...rest }) => {
  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormSelect error={error} id={name} name={name} {...rest}>
        <option value="" />
        {options.map((option) => (
          <option key={option.title || option} value={option.name || option}>
            {option.title || option}
          </option>
        ))}
      </FormSelect>
    </>
  );
};

export default Select;
