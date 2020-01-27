import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todoId: number = 0;

  todoList: ITodo[] = [
    // example of how to make an item in todo list
    {
      title: "Install Angular CLI",
      id: this.todoId,
      status: "Todo",
      createdAt: new Date(),
      description: ""
    }
  ];
  
  statuses: string[] = ["Todo", "Doing", "Done"];
  editingTodo: ITodo;
  /*   status: string = "Todo";
  createdAt = new Date();
  */

  /*   TODO_DATA: ITodo[] = this.todoList;
  */
  constructor() {}

  addTodo(todo: ITodo): void {
    todo.id = this.todoId++;
    this.todoList.push(todo);
  }
  
  getTodos(status: string) {
    if (!status) {
      return this.todoList;
    }
    return this.todoList.filter(todo => todo.status === status);
  }

  editTodo(todo: ITodo) {
/* need to find the todo
 */    
    const index = this.todoList.findIndex(todoItem => 
      todoItem === todo);
/* need to replace the todo      
 */    
    this.todoList.splice(index, 1, this.editingTodo);
/* or
 */    
    this.editingTodo.description = todo.description
    return todo.description;
/*     or something else
 */
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => 
      todoItem === todo);
    this.todoList.splice(index, 1);
  }

  getStatuses() {
    return this.statuses;
  }

}
