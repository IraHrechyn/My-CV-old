import {Component} from '@angular/core';
import {TodoService} from "../../services/todo-service";
import {TodoData} from "../../types/todo-data.interface";
import {TaskStatus} from "../../types/status.enum";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
   readonly TaskStatus = TaskStatus;
  constructor(public todoService: TodoService) {}

  onRowEditInit(todo: TodoData): void {
    this.todoService.m.editedTodos[todo.id] = {...todo};
  }

  onRowEditCancel(todo:TodoData): void {
    this.todoService.m.todos = this.todoService.m.todos.map(item => item.id === todo.id ? this.todoService.m.editedTodos[todo.id]: item);
    delete this.todoService.m.editedTodos[todo.id];
  }

  onRowEditSave(todo:TodoData) {
    this.todoService.m.todos = this.todoService.m.todos.map(item => item.id === todo.id ? todo : item);
    delete this.todoService.m.editedTodos[todo.id];
    this.todoService.saveToLocalStorage();
  }
}
