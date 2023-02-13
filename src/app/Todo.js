import format from 'date-fns/format';

class Todo {
  constructor(title, description, priority, dueDate = null) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? format(new Date(dueDate), 'MM/dd/yyyy') : null;
    this.priority = priority;
    this.completed = false;
  }
}

export default Todo;
