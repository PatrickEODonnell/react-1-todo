let todos = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    description: "Install React Chrome Tools",
    assignedTo: "Patrick",
    status: "Incomplete",
    dueDate: "2018-10-03"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    description: "Add Delete function",
    assignedTo: "Patrick",
    status: "Incomplete",
    dueDate: "2018-11-03"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    description: "Design table layout",
    assignedTo: "Sarah",
    status: "Incomplete",
    dueDate: "2018-12-03"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    description: "Add Insert function",
    assignedTo: "Patrick",
    status: "Incomplete",
    dueDate: "2018-12-24"
  }
];

export function getToDos() {
  return todos;
}

export function getToDo(id) {
  return todos.find(t => t._id === id);
}

export function updateTodo(todo) {
  let todoToUpdate = getToDo(todo._id);
  if (todoToUpdate) {
    todoToUpdate.assignedTo = todo.assignedTo;
    todoToUpdate.description = todo.description;
    todoToUpdate.dueDate = todo.dueDate;
    todoToUpdate.status = todo.status;
  }
}
