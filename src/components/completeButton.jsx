import React from "react";
const CompleteButton = props => {
  const { todo, onComplete } = props;
  return (
    <button
      onClick={() => onComplete(todo)}
      className={
        todo.status === "Incomplete"
          ? "btn btn-warning btn-sm"
          : "btn btn-success btn-sm"
      }
      disabled={todo.status === "Complete" ? "diabled" : ""}
    >
      {todo.status === "Complete" ? "Completed" : "Outstanding"}
    </button>
  );
};

export default CompleteButton;
