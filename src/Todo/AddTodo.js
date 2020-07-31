import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value: value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue();

  function onSubmit(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input {...input.bind} />
      <button type='submit'>Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func,
};

export default AddTodo;
