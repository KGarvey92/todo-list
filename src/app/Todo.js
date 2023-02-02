import format from 'date-fns';

class Todo {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = format(dueDate, 'MM/dd/yyyy');
    this.description = description;
    this.priority = priority;
    this.completed = false;
  }

  editTodo(targetProp, value) {
    if (targetProp === 'dueDate') {
      this[targetProp] = format(value, 'MM/dd/yyyy');
    } else {
      this[targetProp] = value;
    }
  }
}

export default Todo;
