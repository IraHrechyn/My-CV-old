import { Component} from '@angular/core';
import { TodoService } from '../../services/todo-service';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(
    public todoService: TodoService,
    private readonly messageService: MessageService
  ) {}

  cancel() {
    this.todoService.clearTodoForCreation();
    this.todoService.m.showModal = false;
  }

  save() {
    this.todoService.addTodo();
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Task Created',
      life: 3000,
    });
  }
}
