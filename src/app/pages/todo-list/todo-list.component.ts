import {Component, inject, OnInit} from '@angular/core';
import {TodoService} from "./services/todo-service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService.initTodos();
  }
}
