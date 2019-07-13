import Todolist from './todolist.js';
import Pomodoro from './Pomodoro.js';

class App {
  constructor() {
    this.todolist = new Todolist();
    this.pomodoro = new Pomodoro();
  }
}

export { App as default };
