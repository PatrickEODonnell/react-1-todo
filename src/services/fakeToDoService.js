const todos = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    description: "Install React Chrome Tools",
    assignedTo: "Patrick",
    status: "Incomplete",
    dueDate: "2018-10-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    description: "Add Delete function",
    assignedTo: "Patrick",
    status: "Incomplete",
    dueDate: "2018-11-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    description: "Design table layout",
    assignedTo: "Sarah",
    status: "Incomplete",
    dueDate: "2018-12-03T19:04:28.809Z"
  }
];

export function getToDos() {
  return todos;
}

export function getGetToDo(id) {
  return todos.find(t => t._id === id);
}
