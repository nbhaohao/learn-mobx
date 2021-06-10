import React from "react";
import { observer } from "mobx-react";

const Todo = observer(({ todo, change }) => {
  console.log("todo", todo);
  return (
    <div>
      <input
        onChange={() => {
          change(todo);
        }}
        type="checkbox"
        checked={todo.finished}
      />
      {todo.title}
    </div>
  );
});

const TodoList = observer(({ todoStore }) => {
  return (
    <div>
      <h3>TodoList</h3>
      {todoStore.unfinishedCount}
      {todoStore.todos.map((todo) => (
        <Todo change={todoStore.change} key={todo.id} todo={todo} />
      ))}
    </div>
  );
});

export { TodoList };
