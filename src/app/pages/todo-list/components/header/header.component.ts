import {Component} from '@angular/core';
import {TodoService} from '../../services/todo-service';

@Component({
  selector: 'app-header-todo',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderTodoComponent {
  constructor(public readonly todoService: TodoService) {}
}
