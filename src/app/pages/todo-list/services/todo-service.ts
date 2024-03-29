import {Injectable} from "@angular/core";
import {TodoData} from "../types/todo-data.interface";
import {Confirmation, ConfirmationService, MessageService} from "primeng/api";
import {GeneralModel} from "../types/general-model";
import {TaskStatus} from "../types/status.enum";

@Injectable({ providedIn: 'root' })
export class TodoService {
  m: GeneralModel = new GeneralModel();
  constructor(private readonly messageService: MessageService, private readonly confirmationService: ConfirmationService) {}

  assignTodoForCreation():void{
    this.m.newTodo = {id:Date.now(), title:'', status:TaskStatus.ACTIVE, description:null, selected:false};
    this.m.showModal = true;
  }

  clearTodoForCreation():void{
    this.m.newTodo = null;
  }

  addTodo():void {
    if(!this.m.newTodo) return;
    this.m.todos = [this.m.newTodo, ...this.m.todos];
    this.m.newTodo = null;
    this.m.showModal = true;
  }

  deleteTodo(todo: TodoData):void {
    const confirmation: Confirmation = {
      message: 'Are you sure you want to delete ' + todo.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.m.todos = this.m.todos.filter(item => item.id !== todo.id)
        this.saveToLocalStorage();

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Task Deleted',
          life: 3000,
        });

        this.confirmationService.close();
      }
    };

    this.confirmationService.confirm(confirmation);
  }

  deleteSelectedTodos(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected todos?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.m.selectedTodos.length) {
          const idsMap:Record<number, TodoData> = Object.fromEntries(this.m.selectedTodos.map(todo =>[todo.id, todo]));
          this.m.todos = this.m.todos.filter(todo => !idsMap[todo.id]);

          this.saveToLocalStorage();
          this.m.selectedTodos = [];
        }
        this.confirmationService.close();
      },
    });
  }

  initTodos():void{
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) this.m.todos = JSON.parse(storedTodos);
  }

  saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.m.todos));
  }

  getSeverity(status: TaskStatus):string {
    return status === TaskStatus.COMPLETED ? 'success' : '';
  }
}
