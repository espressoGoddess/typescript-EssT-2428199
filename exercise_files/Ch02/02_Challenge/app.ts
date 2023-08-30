enum ToDoStatus {
  Done = "done",
  InProgress = "in-progress",
  ToDo = "to-do",
}

interface ToDoItem {
  id: number;
  title: string;
  status: string;
  completedOn?: Date;
}

const todoItems: Array<ToDoItem> = [
  {
    id: 1,
    title: "Learn HTML",
    status: ToDoStatus.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: ToDoStatus.InProgress },
  { id: 3, title: "Write the best app in the world", status: ToDoStatus.ToDo },
];

function addTodoItem(todo: string): ToDoItem {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: "todo",
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId(items: Array<ToDoItem>): number {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
