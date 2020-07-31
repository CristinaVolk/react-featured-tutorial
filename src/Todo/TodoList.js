import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList({ todos, onHandleChange }) {
  return (
    <div style={styles.ul}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onChange={onHandleChange} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onHandleChange: PropTypes.func,
};

export default TodoList;
