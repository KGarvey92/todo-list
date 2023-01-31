import format from 'date-fns';

class Todo {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = format(dueDate, 'MM/dd/yyyy');
    this.description = description;
    this.priority = priority;
  }

  editTodo(targetProp, value) {
    this[targetProp] = value;
  }
}

export default Todo;
