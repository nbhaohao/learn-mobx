import logo from "./logo.svg";
import "./App.css";
import { TimerView } from "./pages/TimerView";
import appState from "./store/appState";
import { TodoList } from "./pages/TodoList";
import todoStore from "./store/todoStore";

function App() {
  return (
    <div className="App">
      <TimerView appState={appState} />
      <TodoList todoStore={todoStore} />
    </div>
  );
}

export default App;
