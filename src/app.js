class Todo {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
  }

  editTodo(targetProp, value) {
    this[targetProp] = value;
  }
}
