import logo from './logo.svg';
import './App.css';
import {TimerView} from "./pages/TimerView";
import appState from "./store/appState";

function App() {
  return (
    <div className="App">
     <TimerView appState={appState} />
    </div>
  );
}

export default App;
