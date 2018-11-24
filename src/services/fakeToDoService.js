let todos = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    description: "Install React Chrome Tools",
    assignedTo: "Patrick",
    status: "Complete",
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
  console.log("getTodos");
  return todos;
}

export function getToDo(id) {
  return todos.find(t => t._id === id);
}

export function createTodo() {
  const todo = {
    _id: "",
    description: "",
    assignedTo: "",
    status: "Incomplete",
    dueDate: ""
  };
  return todo;
}
