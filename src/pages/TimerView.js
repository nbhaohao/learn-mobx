import { observer } from "mobx-react";

const TimerView = observer(({ appState }) => {
  return (
    <div>
      <h3>TimerView</h3>
      <button>{appState.timer}</button>
    </div>
  );
});

export { TimerView };
