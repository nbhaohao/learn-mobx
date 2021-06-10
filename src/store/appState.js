import {action, observable} from "mobx";

const appState = observable({
  timer: 0
});

setInterval(action(() => {
  appState.timer += 1;
}), 1000)

export default appState;