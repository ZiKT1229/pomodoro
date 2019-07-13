class Todolist {
  constructor() {
    this.mission = document.getElementById('mission');
    this.current = document.getElementsByClassName('doing')[0];
    this.wait = document.getElementsByClassName('todolist')[0];
    this.time = document.getElementsByClassName('time')[0];
    this.list = [
      {
        name: 'The first thing todo today.',
        time: 25
      }
    ];
    this.mission.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        const todo = {
          name: e.srcElement.value,
          time: 25
        };
        this.addTask(todo);
        console.log(e.srcElement.value);
        e.srcElement.value = '';
      }
    });
  }

  $create(tag = 'div', attrs = {}, text = '') {
    const node = document.createElement(tag);
    Object.keys(attrs).forEach((name) => {
      node.setAttribute(name, attrs[name]);
    });
    node.textContent = text;
    return node;
  };

  renderList() {
    this.current.textContent = this.list[0].name;
    for (let i = 1; i < this.list.length; ++i) {
      const li = this.$create('li', { class: 'todo blue' }, this.list[i].name);
      this.wait.appendChild(li);
    }
  }

  addTask(mission) {
    this.list.push(mission);
    this.renderList();
  }

  removeTask() {

  }

  popTask() {
    this.list.pop();
    this.renderList();
  }
}

export { Todolist as default };
