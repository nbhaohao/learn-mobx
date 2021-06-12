import React, { useState } from "react";
import { observer, Observer } from "mobx-react";

const Todo2 = ({ todo, change }) => {
  return (
    <Observer>
      {() => {
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
      }}
    </Observer>
  );
};

// const Todo = observer(({ todo, change }) => {
//   console.log("渲染 todo", todo);
//   return (
//     <div>
//       <input
//         onChange={() => {
//           change(todo);
//         }}
//         type="checkbox"
//         checked={todo.finished}
//       />
//       {todo.title}
//     </div>
//   );
// });

const TodoList = observer(({ todoStore }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        test{count}
      </button>
      <h3>TodoList</h3>
      {todoStore.unfinishedCount}
      {todoStore.todos.map((todo) => (
        <Todo2 change={todoStore.change} key={todo.id} todo={todo} />
      ))}
    </div>
  );
});

export { TodoList };
