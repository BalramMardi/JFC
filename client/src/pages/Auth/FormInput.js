import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-gray-100"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...inputProps}
        id={id}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
          focused &&
          inputProps.pattern &&
          !new RegExp(inputProps.pattern).test(inputProps.value)
            ? "border-red-500 ring-red-500 focus:ring-red-500"
            : ""
        }`}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span
        className="text-xs text-red-500 mt-2"
        style={{
          display:
            focused &&
            inputProps.pattern &&
            !new RegExp(inputProps.pattern).test(inputProps.value)
              ? "block"
              : "none",
        }}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
