import React from "react";
import { FormInput } from "./CommonElements";

const SearchBox = ({ value, onChange }) => {
  return (
    <FormInput
      type="text"
      name="query"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
