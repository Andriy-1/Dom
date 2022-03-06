import React from "react";
import StyleForm from "./FormControls.module.css";
const FormControl = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div>
      <div className={hasError ? StyleForm.error : " "}>
        {props.children}
        {hasError && <span className={StyleForm.error}>{error}</span>}
      </div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const CreateField = (
  Tag,
  styles = null,
  placeholder,
  name,
  validate = null,
  component = null,
  props,
  text = ""
) => {
  return (
    <div className={StyleForm.box}>
      <Tag
        className={styles}
        name={name}
        placeholder={placeholder}
        component={component}
			  validate={validate}
        {...props}
      />
      {text}
    </div>
  );
};
