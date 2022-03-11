import Joi from "joi-browser";
import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import { ButtonPrimary } from "./CommonElements";
import InputFile from "./inputFile";
import TextArea from "./textArea";

export default class Form extends Component {
  state = {
    data: {},
    errors: {},
    images: [],
    objectURLs: [],
  };

  validate = () => {
    const options = { abortEarly: false }; // JOI terminates validation as soon as find error
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; //computed properties
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault(); //submitting form to server causes full page reload
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] =
      input.type === "number" ? parseInt(input.value, 10) : input.value;
    this.setState({ data, errors });
  };

  handleFileChange = (e) => {
    let images = [...this.state.images];
    let objectURLs = [...this.state.objectURLs];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      objectURLs.push(URL.createObjectURL(e.target.files[i]));
    }

    this.setState({ images, objectURLs });
  };
 
  renderInput(name, label, type = "text", multiple, accept = "image/*") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
        multiple={multiple}
      />
    );
  }

  renderInputFile(name, label, type = "file", multiple, accept = "image/*") {
    const { errors } = this.state;
    return (
      <InputFile
        type={type}
        name={name}
        onChange={this.handleFileChange}
        label={label}
        error={errors[name]}
        multiple={multiple}
        accept={accept}
        id={name}
      />
    );
  }

  renderTextArea(name, label, multiple, accept = "image/*") {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
        multiple={multiple}
      />
    );
  }

  renderButton(label) {
    return <ButtonPrimary disabled={this.validate()}>{label}</ButtonPrimary>;
  }

  renderSelect(name, options, label) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        options={options}
        label={label}
      />
    );
  }
}
