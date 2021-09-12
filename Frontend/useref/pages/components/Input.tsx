import React, { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  placeholder: string
}
const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { placeholder },
  ref
) => {
  return (
    <input
      type="text"
      // ref={ref}
      placeholder={placeholder}
      style={{ padding: "1rem" }}
      ref={ref}
    />
  );
};

export default forwardRef(Input); 
