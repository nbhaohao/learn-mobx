import { action, computed, makeObservable, observable } from "mobx";

class TodoStore {
  @observable todos = [
    {
      id: "0",
      finished: false,
      title: "任务1",
    },
    {
      id: "1",
      finished: true,
      title: "任务2",
    },
    {
      id: "2",
      finished: false,
      title: "任务3",
    },
  ];
  @action change(todo) {
    todo.finished = !todo.finished;
  }

  @computed get unfinishedCount() {
    return this.todos.filter((item) => !item.finished).length;
  }

  constructor() {
    makeObservable(this);
  }
}

const todoStore = new TodoStore();

export default todoStore;
