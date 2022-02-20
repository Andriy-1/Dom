import React from "react";
import StyleForm from "./FormControls.module.css";
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={hasError ? StyleForm.error : " "}>
        <textarea  {...input} {...props} />
        {hasError && <span className={StyleForm.error}>{meta.error}</span>}
      </div>
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={hasError ? StyleForm.error : " "}>
        <input  {...input} {...props} />
        {hasError && <span className={StyleForm.error}>{meta.error}</span>}
      </div>
    </div>
  );
};
